import React, { useEffect, useState } from "react";
import "./Mint.css";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { getEngineInfo, purchase } from "../../utils/contracts";
import { useWeb3React } from "@web3-react/core";
import { NFTMintEngineDetail } from "../../utils/typs";
import { truncateWalletString } from "../../utils";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      "& > *": {
        marginBottom: theme.spacing(2),
      },
      "& .MuiBadge-root": {
        marginRight: theme.spacing(4),
      },
    },
    buttonStyle: {
      background: "white",
      color: "black",
      fontWeight: "bolder",
      width: "82.5px",
      height: "51.5px",
      borderRadius: "30px",
      "&:hover": {
        color: "black",
        backgroundColor: "white",
      },
      "&:disabled": {
        color: "gray",
      },
    },
    rootButton: {
      background: "white",
      borderRadius: 30,
      border: 0,
      color: "black",
      fontWeight: "normal",
      fontSize: "24px",
      width: 127.5,
      height: 51.5,
      "&:hover": {
        color: "black",
        backgroundColor: "white",
      },
    },
    label: {
      textTransform: "capitalize",
    },
  })
);

const Mint: React.FC = () => {
  const classes = useStyles();
  const [count, setCount] = React.useState(1);

  const { login } = useAuth();
  const [loginStatus, setLoginStatus] = useState(false);

  const loginMetaMask = () => {
    login(1);
  };

  const [mintEngineDetail, setMintEngineDetail] =
    useState<NFTMintEngineDetail>();
  const { connector, library, chainId, account, active } = useWeb3React();
  useEffect(() => {
    getEngineInfo(chainId, library).then((nftMintEngineDetail: any) => {
      setMintEngineDetail(nftMintEngineDetail);
    });
  }, [connector, library, account, active, chainId]);

  const mintTokens = async () => {
    if (count <= 0) {
      toast.error("Mint Count should be over than 0");
      return;
    }
    const load_toast_id = toast.loading("Plesae wait for Mint...");
    try {
      const bSuccess = await purchase(chainId, library.getSigner(), count);
      if (bSuccess) {
        toast.success("Mint Success!");

        setTimeout(() => {
          window.location.reload();
        }, 3000);
      } else {
        toast.error("Mint Failed!");
      }
    } catch (error) {
      toast.error("Mint Failed!");
    }
    toast.dismiss(load_toast_id);
  };

  return (
    <div className="mint-component">
      <div className="counter-button-container">
        <div className={classes.root}>
          <div>
            <ButtonGroup className="inner-btn-group">
              <Button
                className={classes.buttonStyle}
                aria-label="reduce"
                onClick={() => {
                  setCount(Math.max(count - 1, 0));
                }}
                disabled={count === 1}
              >
                <RemoveIcon
                  style={{ fontWeight: "normal", fontSize: "24px" }}
                />
              </Button>
              <Button
                disabled
                style={{
                  width: "82.5px",
                  height: "51.5px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "0 10px",
                  background: "white",
                  color: "black",
                  fontSize: "24px",
                  fontWeight: "normal",
                  borderRadius: "20px",
                }}
              >
                {count}
              </Button>
              <Button
                className={classes.buttonStyle}
                aria-label="increase"
                onClick={() => {
                  setCount(count + 1);
                }}
                disabled={count === (mintEngineDetail?.purchaseLimit || 20)}
              >
                <AddIcon
                  style={{
                    fontWeight: "normal",
                    fontSize: "24px",
                    width: "84.5px",
                  }}
                />
              </Button>
            </ButtonGroup>
          </div>
        </div>
        <Button
          classes={{
            root: classes.rootButton,
            label: classes.label,
          }}
          onClick={mintTokens}
        >
          MINT
        </Button>
        <br />
        <button onClick={loginMetaMask} className="connect-wallet">
          {" "}
          {loginStatus ? truncateWalletString(account) : "CONNECT WALLET"}
        </button>
        <div
          style={{
            padding: "7px",
            display: "flex",
            fontWeight: 700,
            color: "black",
            justifyContent: "space-around",
            borderRadius: "30px",
            margin: "2vh 0",
            backgroundColor: "white",
          }}
        >
          <span>
            {mintEngineDetail?.mintPrice || count * 0.049} ETH PER MINT
          </span>
        </div>
      </div>
    </div>
  );
};

export default Mint;

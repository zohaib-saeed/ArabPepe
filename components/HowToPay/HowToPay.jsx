import React, { useState } from "react";
import Wrapper from "../shared/Wrapper";
import Heading from "../shared/Typography/Heading";
import StepCard from "./StepCard";
import Step3Card from "./Step3Card";
import Step5Card from "./Step5Card";

const HowToPay = () => {
  const [step, setStep] = useState({
    step1: true,
    step2: false,
    step3: false,
    step4: false,
    step5: false,
    step6: false,
    step7: false,
  });
  const handleStep = (stepNumber) => {
    setStep((prevStep) => {
      // Create a new object with all steps set to false
      const newStep = Object.fromEntries(
        Object.keys(prevStep).map((step) => [step, false])
      );
      // Set the clicked step to true
      newStep[stepNumber] = true;
      return newStep;
    });
  };
  const steps = [
    {
      name: "step1",
      text: "Set up a (BSC) Wallet",
    },
    {
      name: "step2",
      text: "Get BNB (Binance Coin)",
    },
    {
      name: "step3",
      text: "Visit PancakeSwap",
    },
    {
      name: "step4",
      text: "Connect Your Wallet",
    },

    {
      name: "step5",
      text: "Swap BNB for $APEPE",
    },

    {
      name: "step6",
      text: "Confirm the Transaction",
    },
    {
      name: "step7",
      text: "View Your $APEPE Balance",
    },
  ];

  return (
    <Wrapper id="howToPay" style="py-16 lg:min-h-[100vh]">
      <div className="w-full flex flex-col items-center justify-start gap-10">
        <Heading text="How to Buy $APEPE Token" style={"text-center"} />
        <div className="w-full grid lg:grid-cols-2 gap-8 md:gap-2 lg:gap-8">
          {/* buttons here */}
          <div className="w-full flex flex-col items-start justify-start gap-4">
            {steps.map((item, index) => {
              return (
                <button
                  key={index}
                  data-text={item.text}
                  className="outlinedText"
                  onClick={() => handleStep(item.name)}
                >
                  {item.text}
                </button>
              );
            })}
          </div>
          {/* steps div here */}
          {step.step1 && (
            <StepCard
              step={1}
              text=" Before buying $APEPE tokens, you need to have a BSC-compatible
              wallet to store your tokens. You can use wallets like MetaMask,
              Trust Wallet, or Binance Chain Wallet. Make sure your wallet is
              properly set up and connected to the Binance Smart Chain network."
            />
          )}
          {step.step2 && (
            <StepCard
              step={2}
              text="In order to buy $APEPE tokens, you will need BNB to complete the transaction. You can acquire BNB by purchasing it from a cryptocurrency exchange or transferring it from another wallet."
            />
          )}
          {step.step3 && <Step3Card />}

          {step.step4 && (
            <StepCard
              step={4}
              text={`Connect your BSC wallet to PancakeSwap by clicking on the "Connect" button and selecting your wallet from the options provided. Follow the prompts to connect your wallet to PancakeSwap.`}
            />
          )}
          {step.step5 && <Step5Card />}
          {step.step6 && (
            <StepCard
              step={6}
              text="Review the details of the transaction, including the amount of BNB to be spent and the estimated amount of $APEPE tokens you will receive. Confirm the transaction and approve the token swap in your wallet when prompted. Wait for the transaction to be processed on the Binance Smart Chain network."
            />
          )}
          {step.step7 && (
            <StepCard
              step={7}
              text="After the transaction is confirmed, you can view your $APEPE token balance in your BSC wallet. Make sure to add the $APEPE token to your wallet's token list by pasting the contract address mentioned earlier."
            />
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default HowToPay;

import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import { Button } from "./Button";

const ModalContainer = styled.div<{ open: boolean }>`
  display: ${(props) => (props.open ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

const ModalContent = styled.div`
  display: grid;
  gap: 20px;
  justify-content: center;
  background-color: #eee;
  color: black;
  width: 300px;
  padding: 20px;
  padding-top: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
`;

const ModalCloseButton = styled.b`
  cursor: pointer;
  color: black;
  position: absolute;
  top: 10px;
  right: 12px;
  &:hover {
    opacity: 0.7;
  }
`;

const StyledPlaceBet = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  gap: 10px;
`;

type ModalProps = {
  open: boolean;
  onClose: () => void;
  onSubmit: (bet: string) => void;
};

export const Modal = ({ open, onClose, onSubmit }: ModalProps) => {
  const [bet, setBet] = useState("5");

  const handleSubmit = () => {
    onSubmit(bet);
    onClose();
  };

  return (
    <ModalContainer open={open}>
      <ModalContent>
        <ModalCloseButton onClick={onClose}>X</ModalCloseButton>
        <StyledPlaceBet>
          Choose your bet
          <input
            type="number"
            value={bet}
            min="1"
            max="9999"
            onChange={(e) => setBet(e.currentTarget.value)}
          />
        </StyledPlaceBet>
        <Button onClick={handleSubmit}>Place bet</Button>
      </ModalContent>
    </ModalContainer>
  );
};

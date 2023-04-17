import React from "react";
import { Box } from "@chakra-ui/layout";
import { ReactNode } from 'react';

export type WrapperVariant = "small" | "regular";

interface WrapperProps {
  children: ReactNode;
  variant?: WrapperVariant;
}

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  variant = "regular",
}) => {
  return (
    <Box
      mt={8}
      mx="auto"
      maxW={variant === "regular" ? "800px" : "400px"}
      w="100%"
    >
      {children}
    </Box>
  );
};
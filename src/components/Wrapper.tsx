import React from "react";
import { Box } from "@chakra-ui/layout";

export type WrapperVariant = "small" | "regular";

interface Props {
  children: React.ReactNode;
  variant?: WrapperVariant;
}

export const Wrapper: React.FC<Props> = ({
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
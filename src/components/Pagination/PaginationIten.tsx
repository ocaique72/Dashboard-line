import { Button } from "@chakra-ui/react";

interface PaginationItenProps {
    number: number;
  isCurrent?: boolean;
}

export function PaginationIten({ isCurrent = false, number }: PaginationItenProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        w="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bgColor: "pink.500",
          cursor: "default",
        }}
      >
        {number}
      </Button>
    );
  }
  return (
    <Button
      size="sm"
      fontSize="xs"
      w="4"
      bgColor="gray.700"
      _hover={{
        bg: "gray.500",
      }}
    >
      {number}
    </Button>
  );
}

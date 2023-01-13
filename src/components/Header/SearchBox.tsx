import { Icon, Input, Flex } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox(){

//uncontroler componentes
//controler componentes
  // const [search, setSearch] = useState('');
//debouce buscar somente quando clicar no botao

const searchInputRef = useRef<HTMLInputElement>(null);


    return (
        <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxW={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bgColor="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          px="4"
          placeholder="Buscar na plataforma"
          _placeholder={{ color: "gray.400" }}
          // value={search}
          // onChange={event => setSearch(event.target.value)}
          ref={searchInputRef}
        />

        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>
    )
}
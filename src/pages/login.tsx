import { 
    Box, 
    Button, 
    FormControl, 
    FormLabel, 
    Input, 
    Text, 
    VStack } from "@chakra-ui/react";

export default function Login() {
    return (
        <Box 
            bg={'brand.300'}
            justifyContent={'center'} 
            height={'100vh'} 
            display={'flex'} 
            justifyItems={'center'} 
            alignItems={'start'}>
            
            <VStack 
                bg={'white'}
                borderRadius={8} 
                width={500} 
                display={'flex'} 
                padding={8} 
                mt={16} 
                spacing={4} 
                align={'stretch'}
                >
                <Text 
                    my={4}
                    align={'center'} 
                    fontSize={'3xl'} 
                    fontWeight={'normal'}>Inicio de sesión</Text>
                <FormControl>
                    <FormLabel>Correo electrónico</FormLabel>
                    <Input type="email" />
                </FormControl>

                <FormControl>
                    <FormLabel>Contraseña</FormLabel>
                    <Input type="password" />
                </FormControl>

                <Button colorScheme="brand">Iniciar sesión</Button>
            </VStack>
        </Box>
    )
}
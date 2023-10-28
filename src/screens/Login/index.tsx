import * as S from "./styles"

export function Login(){
    return(
        <S.Container>
            <S.EmailInput placeholder="Digite seu email"></S.EmailInput>
            <S.PasswordInput placeholder="Senha"></S.PasswordInput>
            <S.SignUp>Não tem cadastro? Crie sua conta!</S.SignUp>
        </S.Container>
    )
}
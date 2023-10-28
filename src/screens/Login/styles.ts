import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    background-color: ${({theme}) => theme.COLORS.GRAY_500};
`

export const EmailInput = styled.TextInput`
    width: 80%;
    height: 60px;
    background-color: ${({theme}) => theme.COLORS.GRAY_300};
    border-radius: 5px;
    align-items: center;
    margin-bottom: 15px;
    justify-content: center;
`

export const PasswordInput = styled(EmailInput)`
    margin-bottom: 25px;
`

export const SignUp = styled.Text`
    color: ${({theme}) => theme.COLORS.WHITE};
    font-weight: bold;
    font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
`
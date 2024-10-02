import { ButtonContainer } from "./styles";

const Button = ({ label, onClick }) => {
    return (
        <ButtonContainer onclick={ onClick }>
            { label }
        </ButtonContainer>
    );
}

export default Button;
import CardStyle, { MainContainer, Header, Button, Image } from "./Card.style";
import defaultImage from "../../assets/default-image.jpg";
import { useNavigate } from "react-router-dom";

const Card = ({ recipe }) => {
  const navigate = useNavigate();
  return (
    <MainContainer wrap="wrap">
      {recipe?.map((item, index) => (
        <CardStyle key={index}>
          <Header>{item.recipe.label}</Header>
          <Image src={item.recipe.image || defaultImage} />
          <Button
            onClick={() =>
              navigate("details", {
                state: recipe[index],
                replace: false,
              })
            }
          >
            View More
          </Button>
        </CardStyle>
      ))}
    </MainContainer>
  );
};

export default Card;

import React, { useEffect, useState } from "react";
import Cards from "../components/card/Cards";

const Card = () => {
  const [cardsData, setCardsData] = useState("");

  const getDataFromApi = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos`);
      const cardData = await response.json();
      setCardsData(cardData);
    } catch (error) {
      console.log(error, "error");
    }
  };

  const first100Data = cardsData.slice(0, 100);
  console.log(first100Data);

  useEffect(() => {
    getDataFromApi();
  }, []);

  return (
    <>
      {first100Data ? (
        <>
          <div className="flex flex-wrap ">
            {first100Data.map((item) => (
              <Cards title={item?.title} url={item?.url} thumbnailUrl={item?.thumbnailUrl} />
            ))}
          </div>
        </>
      ) : (
        <>Not</>
      )}
    </>
  );
};

export default Card;

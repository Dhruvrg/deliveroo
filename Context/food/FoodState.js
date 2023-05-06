import { useState } from "react";
import FoodContext from "./foodContext";

const FoodState = (props) => {
  const category = [
    {
      id: "",
      title: "Offers",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn0ZrSTUtRuCulG9Twtnf9an5p5GZemzPHbQumMbb1z757B7_nOPrOG7fa-QzKG1x9yms&usqp=CAU",
    },
    {
      id: "2",
      title: "Asian",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlNuSKpBZCqS16VIMRJHt6f0g4jZMzU9T_Nx0WyoK7aLxzD8ooaFm65Hw1nBVUppFt9UY&usqp=CAU",
    },
    {
      id: "3",
      title: "Pizza",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZB1ECeOP_a44Pn3A5eG4T731GlDrPI9HA9b2rGNGB99JpKPEl0J3eLKH4-zRSOyF9j9Y&usqp=CAU",
    },
    {
      id: "4",
      title: "Indian",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn0ZrSTUtRuCulG9Twtnf9an5p5GZemzPHbQumMbb1z757B7_nOPrOG7fa-QzKG1x9yms&usqp=CAU",
    },
    {
      id: "5",
      title: "Sushi",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDBdAtrpOEfrix1_X59n8Q0SdD_XHxg96o1lHyPEQ96eCxSQeaEfPMd8PkMtoO--WCJpY&usqp=CAU",
    },
    {
      id: "6",
      title: "Thai",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgZfwAMUcbuC7AJXPdxY4x2QKrbeFv-HhTq-AEULCvDHJyqrypxqFR_RDAwGm7hAhYwds&usqp=CAU",
    },
    {
      id: "7",
      title: "Chinese",
      imgUrl:
        "https://www.easytourchina.com/images/Photo/16-most-popular-chinese-dishes-best-food-to-eat-in-china/sichuan-hot-pot.jpg",
    },
  ];

  const food = [
    {
      1: [
        {
          id: "1",
          title: "Offers",
          rating: "4",
          genre: "Indian",
          address: "Churchgate",
          short_description:
            "Been coming here since it first opened and have never had any complaints.",
          dishes: [
            {
              id: 1,
              name: "joy",
              description: "very nice food",
              price: 2000,
              imgUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjHm18IGPgsY84_ob-qzQ7Z3OcCZOmtBoUKA&usqp=CAU",
            },
            {
              id: 2,
              name: "joy",
              description: "very nice food",
              price: 2000,
              imgUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjHm18IGPgsY84_ob-qzQ7Z3OcCZOmtBoUKA&usqp=CAU",
            },
            {
              id: 3,
              name: "joy",
              description: "very nice food",
              price: 2000,
              imgUrl:
                "https://d4t7t8y8xqo0t.cloudfront.net/resized/360X200/eazytrendz%2F3834%2Ftrend20230322061320.jpg",
            },
            {
              id: 4,
              name: "joy",
              description: "very nice food",
              price: 2000,
              imgUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjHm18IGPgsY84_ob-qzQ7Z3OcCZOmtBoUKA&usqp=CAU",
            },
            {
              id: 5,
              name: "joy",
              description: "very nice food",
              price: 2000,
              imgUrl:
                "https://d4t7t8y8xqo0t.cloudfront.net/resized/360X200/eazytrendz%2F3834%2Ftrend20230322061320.jpg",
            },
            {
              id: 6,
              name: "joy",
              description: "very nice food",
              price: 2000,
              imgUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjHm18IGPgsY84_ob-qzQ7Z3OcCZOmtBoUKA&usqp=CAU",
            },
          ],
          imgUrl:
            "https://d4t7t8y8xqo0t.cloudfront.net/resized/360X200/eazytrendz%2F3834%2Ftrend20230322061320.jpg",
        },
        {
          id: "2",
          title: "Offers",
          rating: "5",
          genre: "Chinese",
          address: "Dadar",
          short_description:
            "This is the original and authentic Indian restaurant I would like to say original flavour of Indian food service is five star",
          dishes: [],
          imgUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjHm18IGPgsY84_ob-qzQ7Z3OcCZOmtBoUKA&usqp=CAU",
        },
        {
          id: "3",
          title: "Offers",
          rating: "4.5",
          genre: "Italian",
          address: "Boisar",
          short_description:
            "The food is fantastic and the staff are always friendly and helpful.Chilly Chicken Masala to die for.",
          dishes: [],
          imgUrl:
            "https://d4t7t8y8xqo0t.cloudfront.net/resized/360X200/eazytrendz%2F3440%2Ftrend20220307104322.jpg",
        },
        {
          id: "4",
          title: "Offers",
          rating: "4.5",
          genre: "Asian",
          address: "Bandra",
          short_description:
            "This place is welcoming with charming service and dfood better than I have tasted since I was in India",
          dishes: [],
          imgUrl:
            "https://d4t7t8y8xqo0t.cloudfront.net/resized/360X200/eazytrendz%2F3815%2Ftrend20230309103934.jpg",
        },
        {
          id: "5",
          title: "Offers",
          rating: "5",
          genre: "Japanese",
          address: "Bhayander",
          short_description:
            "Great food and service, would highly recommend...Went there on mothering Sunday... Everything perfect. Such friendly staff",
          dishes: [],
          imgUrl:
            "https://d4t7t8y8xqo0t.cloudfront.net/resized/360X200/eazytrendz%2F3824%2Ftrend20230315113038.jpg",
        },
      ],
      2: [
        {
          id: "1",
          title: "Offers",
          rating: "5",
          genre: "Chinese",
          address: "Dadar",
          short_description:
            "This is the original and authentic Indian restaurant I would like to say original flavour of Indian food service is five star",
          dishes: [],
          imgUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjHm18IGPgsY84_ob-qzQ7Z3OcCZOmtBoUKA&usqp=CAU",
        },
        {
          id: "2",
          title: "Offers",
          rating: "4",
          genre: "Indian",
          address: "Churchgate",
          short_description:
            "Been coming here since it first opened and have never had any complaints.",
          dishes: [],
          imgUrl:
            "https://d4t7t8y8xqo0t.cloudfront.net/resized/360X200/eazytrendz%2F3815%2Ftrend20230309103934.jpg",
        },
        {
          id: "3",
          title: "Offers",
          rating: "4.5",
          genre: "Italian",
          address: "Boisar",
          short_description:
            "The food is fantastic and the staff are always friendly and helpful.Chilly Chicken Masala to die for.",
          dishes: [],
          imgUrl:
            "https://d4t7t8y8xqo0t.cloudfront.net/resized/360X200/eazytrendz%2F3834%2Ftrend20230322061320.jpg",
        },
        {
          id: "4",
          title: "Offers",
          rating: "4.5",
          genre: "Asian",
          address: "Bandra",
          short_description:
            "This place is welcoming with charming service and dfood better than I have tasted since I was in India",
          dishes: [],
          imgUrl:
            "https://d4t7t8y8xqo0t.cloudfront.net/resized/360X200/eazytrendz%2F3815%2Ftrend20230309103934.jpg",
        },
        {
          id: "5",
          title: "Offers",
          rating: "5",
          genre: "Japanese",
          address: "Bhayander",
          short_description:
            "Great food and service, would highly recommend...Went there on mothering Sunday... Everything perfect. Such friendly staff",
          dishes: [],
          imgUrl:
            "https://d4t7t8y8xqo0t.cloudfront.net/resized/360X200/eazytrendz%2F3824%2Ftrend20230315113038.jpg",
        },
      ],
      3: [
        {
          id: "1",
          title: "Offers",
          rating: "4",
          genre: "Indian",
          address: "Churchgate",
          short_description:
            "Been coming here since it first opened and have never had any complaints.",
          dishes: [],
          imgUrl:
            "https://d4t7t8y8xqo0t.cloudfront.net/resized/360X200/eazytrendz%2F3824%2Ftrend20230315113038.jpg",
        },
        {
          id: "2",
          title: "Offers",
          rating: "5",
          genre: "Chinese",
          address: "Dadar",
          short_description:
            "This is the original and authentic Indian restaurant I would like to say original flavour of Indian food service is five star",
          dishes: [],
          imgUrl:
            "https://d4t7t8y8xqo0t.cloudfront.net/resized/360X200/eazytrendz%2F3440%2Ftrend20220307104322.jpg",
        },
        {
          id: "3",
          title: "Offers",
          rating: "4.5",
          genre: "Italian",
          address: "Boisar",
          short_description:
            "The food is fantastic and the staff are always friendly and helpful.Chilly Chicken Masala to die for.",
          dishes: [],
          imgUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjHm18IGPgsY84_ob-qzQ7Z3OcCZOmtBoUKA&usqp=CAU",
        },
        {
          id: "4",
          title: "Offers",
          rating: "4.5",
          genre: "Asian",
          address: "Bandra",
          short_description:
            "This place is welcoming with charming service and dfood better than I have tasted since I was in India",
          dishes: [],
          imgUrl:
            "https://d4t7t8y8xqo0t.cloudfront.net/resized/360X200/eazytrendz%2F3815%2Ftrend20230309103934.jpg",
        },
        {
          id: "5",
          title: "Offers",
          rating: "5",
          genre: "Japanese",
          address: "Bhayander",
          short_description:
            "Great food and service, would highly recommend...Went there on mothering Sunday... Everything perfect. Such friendly staff",
          dishes: [],
          imgUrl:
            "https://d4t7t8y8xqo0t.cloudfront.net/resized/360X200/eazytrendz%2F3824%2Ftrend20230315113038.jpg",
        },
      ],
    },
  ];

  return (
    <FoodContext.Provider value={{ category, food }}>
      {props.children}
    </FoodContext.Provider>
  );
};
export default FoodState;

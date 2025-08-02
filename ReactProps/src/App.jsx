import React from "react";
import Card from "./Components/Card";

const App = () => {
  const users = [
    {
      name: "Aarav Mehta",
      city: "Mumbai",
      age: 28,
      profession: "Software Engineer",
      profile_photo:
        "https://media.licdn.com/dms/image/v2/D4E03AQFatYtANL3PKw/profile-displayphoto-shrink_200_200/B4EZZY7MPNH0AY-/0/1745248635783?e=2147483647&v=beta&t=9nBcD69tJ_tQT3_9l3EhEZ2GWnfaFx8eZ0FmmWMhJUw",
    },
    {
      name: "Sneha Kapoor",
      city: "Delhi",
      age: 24,
      profession: "Graphic Designer",
      profile_photo:
        "https://live.staticflickr.com/8649/15702218968_aacf016d5f.jpg",
    },
    {
      name: "Rohan Verma",
      city: "Bangalore",
      age: 31,
      profession: "Data Analyst",
      profile_photo:
        "https://media.assettype.com/cinemaexpress/import/2023/8/13/original/Rohan_Verma.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true",
    },
    {
      name: "Priya Sharma",
      city: "Chennai",
      age: 26,
      profession: "Marketing Executive",
      profile_photo:
        "https://i.dailymail.co.uk/1s/2023/01/19/11/66742837-11653049-image-m-43_1674127844664.jpg",
    },
    {
      name: "Vikram Singh",
      city: "Hyderabad",
      age: 29,
      profession: "Product Manager",
      profile_photo:
        "https://static.toiimg.com/thumb/msid-91171050,imgsize-139646,width-400,resizemode-4/91171050.jpg",
    },
  ];

  return (
    <>
      <div className="card-parent flex items-center justify-center gap-6 flex-wrap h-[100vh] w-[100vw]">
        {users.map((elem, idx) => {
          return (
            <Card
              key={idx}
              name={elem.name}
              city={elem.city}
              age={elem.age}
              profession={elem.profession}
              photo={elem.profile_photo}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;

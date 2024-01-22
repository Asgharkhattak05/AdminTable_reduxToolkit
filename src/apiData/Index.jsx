import { Chance } from "chance";

const chance=Chance()

const fakeApiData = () => {
    return {
      age: chance.age(),
      name: chance.name({ middle: true }),
     "city": chance.city(), 
     "email":chance.email()
    };
  };
  
  const DisplayFakeData = () => {
    const data = fakeApiData();
  
    return (
        <div className="ageName">
        <p >
          <strong>Name:</strong> {data.name}
        </p>
        <p className="age">
          <strong>Age:</strong> {data.age}
        </p>
        <p className="age">
          <strong>City:</strong> {data.city}
        </p>
        <p className="age">
          <strong>E-mail:</strong> {data.email}
        </p>
        
      </div>
    );
  };
  
  export default DisplayFakeData;
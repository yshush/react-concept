import "./App.css";
import Avatar from "./components/Avatar";
import Profile from "./components/Profile";

function AppProfile() {
  const handleClick = (e) => {
    console.log(e);
    alert("버튼이 클릭됨");
  };
  return (
    <>
      <button onClick={handleClick}>버튼</button>
      <Avatar
        image="https://images.unsplash.com/photo-1652355128201-cde2f143d851?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
        isNew="true"
      />
      <Profile
        image="https://images.unsplash.com/photo-1652355128201-cde2f143d851?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
        name="James Kim"
        title="front-end developer"
        isNew={true}
      />
      <Profile
        image="https://images.unsplash.com/photo-1519160558534-579f5106e43f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        name="Anna Young"
        title="back-end developer"
      />
      <Profile
        image="https://images.unsplash.com/photo-1480812494744-bfed1358a9b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
        name="Bob Yu"
        title="front-end developer"
      />
    </>
  );
}

export default AppProfile;

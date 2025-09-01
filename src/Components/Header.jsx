import chefLogo from "../assets/chef.png";

const Header = () => {
  return (
    <header>
      <img src={chefLogo} alt="chef" />
      <p>My CookNotes</p>
    </header>
  );
};
export default Header;

import Sitename from './Header/SiteName';
import Navigation from './Header/Navigation';
import AuthorInput from './Header/AuthorInput';
 
const Header = (... props) => (
    <header>
        <Sitename />
        <Navigation />
        <AuthorInput />
    </header>
)

export default Header;
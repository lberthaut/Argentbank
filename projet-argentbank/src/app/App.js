import { connect } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { fetchedUser } from '../services/redux/fetch/fetcheduser';
import Index from '../pages/indexpage';
import Footer from '../components/footer';
import Footerstyle from '../styles/footerstyle';
import Signinpage from '../pages/signinpage';
import Userpage from '../pages/userpage';
import Error404 from '../components/error';
import Header from '../components/header';
import Headerstyle from '../styles/headerstyle';

/**
 * Create routes for differents components of the site
 *
 * @class
 * @this {App}
 * @param {id} id of the user
 */

function App() {


    return (
        <>
            <Header />
            <Headerstyle />
            <Routes>
                <Route exact path="/" element={<Index />} />
                <Route path="/login" element={<Signinpage />} />
                <Route path="/user" element={<Userpage />} />
                <Route path="/*" element={<Error404 />} />
            </Routes>
            <Footer />
            <Footerstyle />
        </>

    );
}

const mapStateToProps = ({ token, user }) => {
    return {
        token,
        user,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchedUser: (...args) => dispatch(fetchedUser(...args)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

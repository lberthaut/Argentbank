import { connect, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchedUser } from '../../services/redux/fetch/fetcheduser';
import EditUserName from './edituser';
import Changenamestyle from '../../styles/userstyles/changenamestyle';
import Index from '../../pages/indexpage';

const User = ({ token, fetchedUser }) => {
    const [isToggleBtn, setIsToggleBtn] = useState(true);
    const [isToggle, setIsToggle] = useState(false);
    const user = useSelector((state) => state.user);
    const firstName = useSelector((state) => state.firstName);
    const lastName = useSelector((state) => state.lastName)

    useEffect(() => {
        if (token) {
            const request = {
                method: 'POST',
                endPoints: 'profile',
                token: token,
                body: {
                    firstName,
                    lastName
                }
            };

            fetchedUser(request);
        }
    }, [token, fetchedUser, firstName, lastName]);
    const change = () => {
        setIsToggleBtn(!isToggleBtn);
        setIsToggle(!isToggle);
    };

    console.log(user)

    if (!token) {
        return <Index />;
    }

    return (
        <>
            <div className="header">
                <h1>Welcome back</h1>
                <div style={{ display: isToggleBtn ? 'flex' : 'none' }}>
                    <h2>
                        {/* {user.body.firstName}&nbsp;
                        {user.body.lastName} */}
                    </h2>
                </div>
                <button
                    onClick={() => change()}
                    className="edit-button"
                    style={{ display: isToggleBtn ? 'flex' : 'none' }}
                >
                    Edit Name{' '}
                </button>
            </div>

            <EditUserName token={token} change={change} isToggle={isToggle} />
            <Changenamestyle />
        </>
    );
};

const mapStateToProps = ({ token, firstName, lastName }) => {
    return {
        token,
        firstName,
        lastName,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchedUser: (...args) => dispatch(fetchedUser(...args)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);

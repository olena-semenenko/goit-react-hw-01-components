import PropTypes from 'prop-types'
// import friends from 'friends.js'

export const FriendList = (friends) => {
    return (<ul className="friend-list">
       
    </ul>)
}

FriendList.propTypes = {
    friends:PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    }),).isRequired,
}
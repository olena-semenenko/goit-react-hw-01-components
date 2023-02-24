import PropTypes from 'prop-types'
import { FriendListItem } from 'components/FriendListItem/FriendListItem'
import {List} from 'components/FriendList/FriendList.styled'

export const FriendList = ({ friends }) => {
    return (
        <List>
            {friends.map(item => (<FriendListItem key={item.id} avatar={item.avatar} name={item.name} isOnline={item.isOnline} ></FriendListItem>))}
        </List>)
}

FriendList.propTypes = {
    friends:PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    }),).isRequired,
}
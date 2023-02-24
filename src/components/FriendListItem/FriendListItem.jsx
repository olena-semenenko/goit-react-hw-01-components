import PropTypes from 'prop-types'
import { showStatus } from 'utils/index'
import { Item, Status, Title } from 'components/FriendListItem/FriendListItem.styled'
export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <Item>
            <Status style={{
                backgroundColor: showStatus(isOnline)
            }}></Status>
            <img src={avatar} alt="User avatar" width="48" />
            <Title>{name}</Title>
        </Item>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}
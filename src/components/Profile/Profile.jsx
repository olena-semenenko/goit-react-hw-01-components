import PropTypes from 'prop-types';
import { ProfileContainer, DescriptionContainer, Avatar, UserName, UserTag, UserLocation, StatsList, ListItem, StatsLabel, StatsQuantity } from 'components/Profile/Profile.styled'

export const Profile = ({avatar, username, tag, location, followers, views, likes}) => {
    return (
        <ProfileContainer>
            <DescriptionContainer>
                <Avatar
                    src={avatar}
                    alt="User avatar"
                    className="avatar"
                />
                <UserName>{username}</UserName>
                <UserTag>@{tag}</UserTag>
                <UserLocation>{location}</UserLocation>
                </DescriptionContainer>

            < StatsList>
                <ListItem>
                    <StatsLabel>Followers</StatsLabel>
                    <StatsQuantity>{followers}</StatsQuantity>
                </ListItem>
                <ListItem>
                    <StatsLabel>Views</StatsLabel>
                    <StatsQuantity>{views}</StatsQuantity>
                </ListItem>
                <ListItem>
                    <StatsLabel>Likes</StatsLabel>
                    <StatsQuantity>{likes}</StatsQuantity>
                </ListItem>
            </StatsList>
        </ProfileContainer>
      
  );
}
    
Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
}


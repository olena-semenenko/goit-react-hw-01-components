import PropTypes from 'prop-types'
import { getRandomHexColor } from 'utils/index'
import { Section, SectionTitle, StatsList, StatsItem, StatsLabel, StatsPercentage } from 'components/Statistics/Statistics.styled'



export const Statistics = ({title, stats}) => {
    return (
        <Section>
            {{ title } && <SectionTitle className="title">{title}</SectionTitle>}
           
            <StatsList>
                {stats.map(item => (
                    <StatsItem key={item.id} style={{ backgroundColor: getRandomHexColor()
                     }}>
                        <StatsLabel>{item.label}</StatsLabel>
                        <StatsPercentage>{item.percentage}%</StatsPercentage>
                    </StatsItem>
                ))}
               
            </StatsList>
        </Section>
    )
}
Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
    }),).isRequired,
}
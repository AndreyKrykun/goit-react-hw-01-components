import PropTypes from "prop-types";
import { StatisticsTitle, StatList, StatItem } from './Statistics.styled';
import { Box } from '../Box';

export const Statistics = ({ title, stats}) => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        border="1px solid black"
        
      mb='40px'>
      {title && <StatisticsTitle>{title}</StatisticsTitle>} 

    <StatList>
      {stats.map(({ id, label, percentage }) => (
        <StatItem key={id}>
                <span className="label">{label}</span>
                <span className="percentage">{percentage}%</span>
    </StatItem>
      )
      )}
  </StatList>
      </Box>
      </>)
    
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired
}
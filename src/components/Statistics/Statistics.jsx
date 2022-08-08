import PropTypes from "prop-types";
import { StatisticsTitle, StatList } from './Statistics.styled';
import { getRandomHexColor } from 'components/getRandomHexColor';
import { Box } from '../Box';

export const Statistics = ({ title, stats }) => {
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
            <Box key={id}
              display="flex"
              flexDirection="column"
              alignItems="center"
              bg={getRandomHexColor()}
              p={3}>
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
            </Box>
          )
          )}
        </StatList>
      </Box>
    </>)
    
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired
};
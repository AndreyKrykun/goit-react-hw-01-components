import PropTypes from "prop-types";
import {TransactionTable, Table, TableTitel} from './TransactionHistory.styled'
export const TransactionHistory = ({ items }) => {
    return (<Table className="transaction-history">
        <TableTitel>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </TableTitel>

        <tbody>
            {items.map(({ id, type, amount, currency }) => (<tr key={id}>
                <TransactionTable>{type}</TransactionTable>
                <td>{amount}</td>
                <td>{currency}</td>
            </tr>))}
          
        </tbody>
    </Table>)
};


TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })).isRequired,
};
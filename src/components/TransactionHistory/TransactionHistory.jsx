import PropTypes from 'prop-types'
import { Table, TableHeader, TableHead } from 'components/TransactionHistory/TransactionHistory.styled'
import { getRandomHexColor } from 'utils/index'
export const TransactionHistory = ({ items }) => {
    return (
        <Table>
            <TableHeader>
                <tr>
                    <TableHead>Type</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Currency</TableHead>
                </tr>
            </TableHeader>

            <tbody>
                {items.map(({id, type, amount, currency}) => (
                    <tr key={id} style={{
                        backgroundColor: getRandomHexColor()
                    }}>
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </tr> 
                ))}
            </tbody>
        </Table> 
    )
}
TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }),).isRequired,
}
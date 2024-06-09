import { useSelector } from "react-redux"

export default () => {
    const items = useSelector(state => state);

    return <div>
        <h3>Panier</h3>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    items.map(item => {
                        return <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
        <h4>Le total du panier est : 0$</h4>
    </div>
}
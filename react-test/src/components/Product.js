export default ({ data, deleteProduct }) => {
    const {id, title, price, thumbnail} = data;

    return <div className='product'>
        <img width={50} src={thumbnail}/>
        <h2>{title}</h2>
        <span>{price} $</span>
        <button onClick={() => deleteProduct(id)}>Supprimer</button>
    </div>
}
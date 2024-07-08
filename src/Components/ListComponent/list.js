export const  ListParent = () => {
    return(
        <div>
            <ListOrdered></ListOrdered>
            <ListUnordered></ListUnordered>
        </div>
    )

}
export const  ListOrdered = () => {
    return (
        <div>
            <ol>
               <ListItems></ListItems>
            </ol>
        </div>
    )
     
} 
export const ListUnordered = () => {
    return (
        <div>
            <ul>
            <ListItems></ListItems>
            </ul>
        </div>
    )
}
export  const ListItems = () => {
    const aarray = ["banana" , "apple","orange" ]
    return(
    <div>
    {aarray.map((list,index)=>(<li key={index}>{list}</li>))}
    </div>
    )
}

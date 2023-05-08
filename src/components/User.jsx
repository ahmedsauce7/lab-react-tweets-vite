function User(props){
    return (
    <span className='user'>
    <span className='name'>{props.userData.name}</span>
    <span className='handle'>@{props.userData.handle}</span>
  </span>
    )
 }
 
 export default User;

// another way of doing it 
//  function User({name, handle}){
//   return (
//   <span className='user'>
//   <span className='name'>{name}</span>
//   <span className='handle'>@{handle}</span>
// </span>
//   )
// }

// export default User;
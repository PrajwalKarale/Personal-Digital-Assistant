function ProfileCard({title, handle}) {
    //Destructuring the props {title, handle} = props
    return (
        <div>
            <div>The title is {title}</div>
            <div>The handle is {handle}</div>
        </div>
    );
}

export default ProfileCard;
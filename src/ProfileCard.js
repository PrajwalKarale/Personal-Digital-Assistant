function ProfileCard({title, handle, image}) {
    //Destructuring the props {title, handle} = props
    return (
        <div>
            <div className="card">
                <div className="card-image">
                    <figure className="image is-1by1">
                        <img src={image} alt="personal-digital-assistant logo" />
                    </figure>
                </div>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">The title is {title}</p>
                    <p className="subtitle is-6">The handle is {handle}</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;
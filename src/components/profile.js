import React, { Component } from 'react';

const Profile = ({user}) => {

    const SPACE = ' ';

    if(!user) {
        return (
            <div className="col-md-8 col-md-offset-2">
            </div>
        );
    }
    return (
        <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">{user.login}</h3>
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-sm-4">
                            <img className="img-thumbnail img-rounded img-responsive github-avatar" src={user.avatar_url} />
                        </div>
                        <div className="col-sm-8">
                            <div className="stats">
                                <span className="label label-warning">{user.public_repos} Public Repos</span>{SPACE}
                                <span className="label label-primary">{user.public_gists} Public Gists</span>{SPACE}
                                <span className="label label-success">{user.followers} Followers</span>{SPACE}
                                <span className="label label-info">{user.following} Following</span>
                            </div>
                            <br />
                            <ul className="list-group">
                                <li className="list-group-item"><strong>Username: </strong>{user.name}</li>
                                <li className="list-group-item"><strong>Location: </strong>{user.location}</li>
                                <li className="list-group-item"><strong>Email: </strong>{user.email}</li>
                                <li className="list-group-item"><strong>Website: </strong>{user.blog}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;

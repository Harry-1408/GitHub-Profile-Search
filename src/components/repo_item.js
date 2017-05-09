import React from 'react';

const RepoItem = ({repo}) => {
    const SPACE = ' ';
    return(
            <div className="row">
                <div className="col-md-9">
                    <h4><a href={repo.html_url} target="_blank">{repo.name} </a></h4>
                    <p>{repo.description}</p>
                </div>
                <div className="col-md-3">
                    <span className="label label-default">{repo.watchers} Watchers</span>{SPACE}
                    <span className="label label-primary">{repo.forks} Forks</span>
                </div>
            </div>
    );
}


export default RepoItem;

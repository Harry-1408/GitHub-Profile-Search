import React from 'react';
import RepoItem from './repo_item';

const RepoList = ({repos}) => {
    if(!repos) {
        return (<div />);
    }

    return(
        <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">List of Repos</h3>
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-md-12">
                            {repos.map(repo => {
                                return (
                                    <div key={repo.id}>
                                        <RepoItem repo={repo} />
                                        <hr />
                                    </div>
                                );
                            })}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default RepoList;

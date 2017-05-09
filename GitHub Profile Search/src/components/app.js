import React, { Component } from 'react';

import axios from 'axios';
import _ from 'lodash';

import NavBar from './navbar';
import SearchBar from './search_bar';
import Profile from './profile';
import RepoList from './repo_list';


const CLIENT_ID = 'fc62f4d721c91d780811';
const CLIENT_SECRET = '73ea5bdec2ab1807464ae5e473380c68740823e6';
const API_URL = 'https://api.github.com/users';

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            term: '',
            user: null,
            repos: null,
        };

        this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
        this.submit = this.submit.bind(this);
        //wait for 300 milisecond then call getProfile.
        this.getProfile = _.debounce(this.getProfile, 300).bind(this);
    }

    render () {
        const userId = this.state.term;
        return(
            <div >
                <NavBar />
                <div className="container">
                    <SearchBar term={this.state.term} submitForm={this.submit} handleChange={this.handleSearchTermChange}/>
                    <br />
                    <Profile user={this.state.user} />
                    <br />
                    <RepoList repos={this.state.repos} />
                </div>
            </div>
        );

    }

    handleSearchTermChange(event) {
		this.setState({term: event.target.value}, this.getProfile);
	}

	submit(event) {
		event.preventDefault();
		this.getProfile(this.state.term);
	}

	getProfile() {
        const username = this.state.term;
        const profile_url = `${API_URL}/${username}?client_id=${CLIENT_ID}&&client_secret=${CLIENT_SECRET}`;
        const repos_url = `${API_URL}/${username}/repos?client_id=${CLIENT_ID}&&client_secret=${CLIENT_SECRET}`

		axios.get(profile_url)
			.then(userResponse => {
                axios.get(repos_url)
                .then(repoResponse => {
                    this.setState({repos: repoResponse.data});
                });
                this.setState({user: userResponse.data});
			})
			.catch(err => {
				console.log(`umm!!!! ${this.state.term}\n` + err);
			});
	}

}

import React, { Component } from "react";
import { FormControl, TextField, InputLabel, Button } from "@material-ui/core"
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
    container: {
        flexWrap: 'wrap'
    },
    formControl: {
        margin: theme.spacing.unit,
        padding: theme.spacing.unit * 6,

    },

})

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            firstName: "",
            email: "",
            password: "",
            passwordBis: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log(JSON.stringify(this.state));
    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.container}>
                <h1>{JSON.stringify(this.state)}</h1>
                <form onSubmit={this.handleSubmit}>
                    <FormControl className={classes.formControl} >
                        <InputLabel htmlFor="Name">Entrez votre Nom :</InputLabel>
                        <TextField
                            onChange={e => this.setState({ name: e.target.value })}
                            type="text"
                            name="name"
                        />
                    </FormControl>
                    <FormControl className={classes.formControl} >
                        <InputLabel htmlFor="firstName">Entrez votre prénom :</InputLabel>
                        <TextField
                            onChange={e => this.setState({ firstName: e.target.value })}
                            type="text"
                            name="firstName"
                        />
                    </FormControl>
                    <FormControl className={classes.formControl} >
                        <InputLabel htmlFor="email">Entrez votre email :</InputLabel>
                        <TextField
                            onChange={e => this.setState({ email: e.target.value })}
                            type="email"
                            name="email"
                        />
                    </FormControl>
                    <FormControl className={classes.formControl} >

                        <InputLabel htmlFor="password">Choisir un mot de passe :</InputLabel>
                        <TextField
                            onChange={e => this.setState({ password: e.target.value })}
                            type="password"
                            name="password"
                        />
                    </FormControl>
                    <FormControl className={classes.formControl} >
                        <InputLabel htmlFor="passwordBis">Répétez votre mot de passe :</InputLabel>
                        <TextField
                            onChange={e => this.setState({ passwordBis: e.target.value })}
                            type="password"
                            name="passwordBis"
                        />
                    </FormControl>
                    <Button variant="contained" color="primary" type="submit" value="submit">Valider</Button>
                </form>
            </div>
        );
    }
}
SignUp.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignUp);

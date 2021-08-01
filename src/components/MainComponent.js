import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from "./menuComponent";
import Contact from "./ContactusComponent";
import Dishdetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from './aboutusComponent';
import { DISHES } from "../shared/dishes";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";
import { COMMENTS } from "../shared/comments";
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        }
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }

    render() {
        const HomePage = () => {
            return (
                <Home
                    dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promotion) => promotion.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }

        const ContactPage = () => {
            return (
                <Contact />
            );
        }

        const AboutPage = () => {
            return (
                <About leaders={this.state.leaders} />
            );
        }



        const DishWithId = ({ match }) => {
            return (
                <Dishdetail
                    dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                >
                </Dishdetail>
            );
        }


        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu"
                        component={() =>
                            <div>
                                <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
                                <Dishdetail className="text-center" dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}></Dishdetail>
                            </div>
                        } />
                    <Route path="/menu/:dishId" component={DishWithId} />
                    <Route exact path="/contactus" component={ContactPage} />
                    <Route exact path="/aboutus" component={AboutPage} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;
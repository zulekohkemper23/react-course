import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle><b>{dish.name}</b></CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    renderComments(comments) {
        if (comments.length) {
            const commentsList = comments.map((comment, commentIndex) => {
                return (
                    <div key={commentIndex}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}, {comment.date}</p>
                    </div>
                );
            });

            return (
                <div>
                    <h4>Comments</h4>
                    {commentsList}
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    render() {
        if (this.props.dish != null) {
            const dish = this.props.dish;
            const dishDetails = this.renderDish(dish);
            const dishComments = this.renderComments(dish.comments);

            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {dishDetails}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {dishComments}
                    </div>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

}

export default DishDetail;
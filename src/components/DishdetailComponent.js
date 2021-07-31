import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


  function  RenderDish({dish}) {
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

    function RenderComments({comments}) {
        if (comments.length) {
            const commentsList = comments.map((comment, commentIndex) => {
                return (
                    <div key={commentIndex}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US',{year:'numeric', month:'short',day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
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

const DishDetail = (props) => {
        if (props.dish != null) {
            const dish = props.dish;
            const dishDetails = <RenderDish dish={props.dish}/>
            const dishComments = <RenderComments comments={props.dish.comments}/>
  
            return (
                <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {dishDetails}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {dishComments}
                    </div>
                </div>
                </div>

            );
        } else {
            return (
                <div></div>
            );
        }
    }


export default DishDetail;
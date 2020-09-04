import React from "react";
import { Link } from "react-router-dom";

export default props => {
    return (
        <div>
            <h3>Content for page: {props.match.params.page}</h3>
            <br />
            <div class="list-group">
                <a
                    href="#"
                    class="list-group-item list-group-item-action">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">List group item heading</h5>
                        <small>3 days ago</small>
                    </div>
                    <p class="mb-1">
                        Donec id elit non mi porta gravida at eget metus.
                        Maecenas sed diam eget risus varius blandit.
                    </p>
                    <small>Donec id elit non mi porta.</small>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">List group item heading</h5>
                        <small class="text-muted">3 days ago</small>
                    </div>
                    <p class="mb-1">
                        Donec id elit non mi porta gravida at eget metus.
                        Maecenas sed diam eget risus varius blandit.
                    </p>
                    <small class="text-muted">
                        Donec id elit non mi porta.
                    </small>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">List group item heading</h5>
                        <small class="text-muted">3 days ago</small>
                    </div>
                    <p class="mb-1">
                        Donec id elit non mi porta gravida at eget metus.
                        Maecenas sed diam eget risus varius blandit.
                    </p>
                    <small class="text-muted">
                        Donec id elit non mi porta.
                    </small>
                </a>
            </div>
            <br />
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                        <Link className="page-link" to={props.match.url}>
                            Prev
                        </Link>
                    </li>

                    <li class="page-item">
                        <Link
                            className="page-link"
                            to={props.match.path.replace(":page", 1)}>
                            1
                        </Link>
                    </li>
                    <li class="page-item">
                        <Link
                            className="page-link"
                            to={props.match.path.replace(":page", 2)}>
                            2
                        </Link>
                    </li>
                    <li class="page-item">
                        <Link
                            className="page-link"
                            to={props.match.path.replace(":page", 3)}>
                            3
                        </Link>
                    </li>
                    <li class="page-item">
                        <Link className="page-link" to={props.match.url}>
                            Next
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

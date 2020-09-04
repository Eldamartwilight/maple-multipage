/**
 * @description Fetch Content (text type);
 * @param page
 * @return {Promise}
 */

const example1 =
    '            <div class="row mb-4">\n' +
    '                <div class="col-sm-4">\n' +
    '                    <div class="card">\n' +
    "                        <img\n" +
    '                            src="https://i.ytimg.com/vi/OXuIqaeg0SI/maxresdefault.jpg"\n' +
    '                            class="card-img-top"\n' +
    '                            alt="..."\n' +
    "                        />\n" +
    '                        <div class="card-body">\n' +
    '                            <h5 class="card-title">Card title</h5>\n' +
    '                            <p class="card-text">\n' +
    "                                Some quick example text to build on the card\n" +
    "                                title and make up the bulk of the card's\n" +
    "                                content.\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    '                <div class="col-sm-4">\n' +
    '                    <div class="card">\n' +
    "                        <img\n" +
    '                            src="https://i.ytimg.com/vi/OXuIqaeg0SI/maxresdefault.jpg"\n' +
    '                            class="card-img-top"\n' +
    '                            alt="..."\n' +
    "                        />\n" +
    '                        <div class="card-body">\n' +
    '                            <h5 class="card-title">Card title</h5>\n' +
    '                            <p class="card-text">\n' +
    "                                Some quick example text to build on the card\n" +
    "                                title and make up the bulk of the card's\n" +
    "                                content.\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    '                <div class="col-sm-4">\n' +
    '                    <div class="card">\n' +
    "                        <img\n" +
    '                            src="https://i.ytimg.com/vi/OXuIqaeg0SI/maxresdefault.jpg"\n' +
    '                            class="card-img-top"\n' +
    '                            alt="..."\n' +
    "                        />\n" +
    '                        <div class="card-body">\n' +
    '                            <h5 class="card-title">Card title</h5>\n' +
    '                            <p class="card-text">\n' +
    "                                Some quick example text to build on the card\n" +
    "                                title and make up the bulk of the card's\n" +
    "                                content.\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>";

const example2 =
    '<ul class="list-group">\n' +
    '                <li class="list-group-item">Cras justo odio</li>\n' +
    '                <li class="list-group-item">Dapibus ac facilisis in</li>\n' +
    '                <li class="list-group-item">Morbi leo risus</li>\n' +
    '                <li class="list-group-item">Porta ac consectetur ac</li>\n' +
    '                <li class="list-group-item">Vestibulum at eros</li>\n' +
    "            </ul>\n" +
    "\n" +
    "            <br />\n" +
    "\n" +
    '            <ul class="list-group mb-4">\n' +
    '                <li class="list-group-item">Cras justo odio</li>\n' +
    '                <li class="list-group-item">Dapibus ac facilisis in</li>\n' +
    '                <li class="list-group-item">Morbi leo risus</li>\n' +
    '                <li class="list-group-item">Porta ac consectetur ac</li>\n' +
    '                <li class="list-group-item">Vestibulum at eros</li>\n' +
    "            </ul>";
export const apiFetchPageContent = page => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (page === "/content-from-server/something/error-page") {
                reject({
                    content: "<div>Error!</div>",
                });
            } else {
                resolve({
                    content:
                        Math.random() > 0.5
                            ? example1.concat(example1)
                            : example2.concat(example2),
                });
            }
        }, 500);
    });
};

let form = document.getElementById("reviewForm");

function submitReview(event) {
    event.preventDefault();
    let title = document.getElementById("reviewTitle").value;
    let comment = document.getElementById("reviewText").value;
    let name = document.getElementById("reviewName").value;

    name == "" ? name = "Anonymous" : name;

    let card = `<div class="card h-100">
                            <div class="card-body">
                                <h4 class="card-title">${title}</h4>
                                <blockquote class="blockquote mb-0">
                                    <p>${comment}</p>
                                    <footer class="text-end blockquote-footer"><i>${name}</i></footer>
                                </blockquote>
                            </div>
                        </div>`;

    if (title != "" && comment != "") {
        const div = document.createElement('div');
        div.innerHTML = card;
        div.setAttribute('class', 'col-lg-4 col-md-6 py-3');
        document.getElementById("reviewsRow").appendChild(div);
    }
}

form.addEventListener('submit', submitReview);

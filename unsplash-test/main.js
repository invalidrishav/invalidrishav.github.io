require('dotenv').config();
const apiUrl = process.env.ACCESS_KEY;

window.addEventListener('load', () => {
    // *GET THE DIVS
    const div_for_page_no_one = document.querySelector('.page_no_one');
    const div_for_page_no_two = document.querySelector('.page_no_two');
    const div_for_page_no_three = document.querySelector('.page_no_three');

    // ALL THE 3 PAGES
    let api_no_one = `https://api.unsplash.com/photos/?client_id=${apiUrl}&page=1;per_page=30`;
    let api_no_two = `https://api.unsplash.com/photos/?client_id=${apiUrl}&page=2;per_page=30`;
    let api_no_three = `https://api.unsplash.com/photos/?client_id=${apiUrl}&page=3;per_page=30`;

    setTimeout(() => {
        fetch(api_no_one, {
            method: 'GET',
        })
            .then((resp) => {
                if (resp.ok) return resp.json();
                else return Promise.reject(resp);
            })
            .then((data) => {
                console.log(data);

                div_for_page_no_one.innerHTML = `<div class="inner_div_for_page_no_one">${data
                    .map(
                        (photo) =>
                            `<a href="${photo.links.download}" target="_blank" class="download_link">
                                <img src="${photo.urls.small}" alt="Images from the api">
                            </a>`
                    )
                    .join('')}</div>`;
            });
        fetch(api_no_two, {
            method: 'GET',
        })
            .then((resp) => {
                if (resp.ok) return resp.json();
                else return Promise.reject(resp);
            })
            .then((data) => {
                console.log(data);

                div_for_page_no_two.innerHTML = `<div class="inner_div_for_page_no_two">${data
                    .map(
                        (photo) =>
                            `<a href="${photo.links.download}" target="_blank" class="download_link">
                                <img src="${photo.urls.small}" alt="Images from the api">
                            </a>`
                    )
                    .join('')}</div>`;
            });
        fetch(api_no_three, {
            method: 'GET',
        })
            .then((resp) => {
                if (resp.ok) return resp.json();
                else return Promise.reject(resp);
            })
            .then((data) => {
                console.log(data);

                div_for_page_no_three.innerHTML = `<div class="inner_div_for_page_no_three">${data
                    .map(
                        (photo) =>
                            `<a href="${photo.links.download}" target="_blank" class="download_link">
                                <img src="${photo.urls.small}" alt="Images from the api">
                            </a>`
                    )
                    .join('')}</div>`;
            });
    }, 50);
});

/*
 * ************************************************
 * **************** THE SEARCH BAR ****************
 * ************************************************
 */

// *GETTING THE ELEMENTS
const left_side_text = document.querySelector('.search_result');
const form = document.querySelector('form');
const search_bar = document.querySelector('#input');
const search_btn = document.querySelector('#search');

// *GET THE DIVS
const div_for_page_no_one = document.querySelector('.page_no_one');
const div_for_page_no_two = document.querySelector('.page_no_two');
const div_for_page_no_three = document.querySelector('.page_no_three');

search_btn.addEventListener('click', (e) => {
    const search_txt = search_bar.value.trim();

    if (!search_txt) left_side_text.textContent = 'Nothing to search';
    else {
        left_side_text.textContent = search_txt;
        search_the_query(search_txt);
    }

    search_bar.value = '';
});

async function search_the_query(search_txt) {
    api_no_one = `https://api.unsplash.com/search/photos?per_page=30;page=1&client_id=${apiUrl}&query=${search_txt}`;
    api_no_two = `https://api.unsplash.com/search/photos?per_page=30;page=2&client_id=${apiUrl}&query=${search_txt}`;
    api_no_three = `https://api.unsplash.com/search/photos?per_page=30;page=3&client_id=${apiUrl}&query=${search_txt}`;

    setTimeout(() => {
        fetch(api_no_one, {
            method: 'GET',
        })
            .then((resp) => {
                if (resp.ok) return resp.json();
                else return Promise.reject(resp);
            })
            .then((data) => {
                console.log(data);

                div_for_page_no_one.innerHTML = `<div class="inner_div_for_page_no_one">${data.results
                    .map(
                        (photo) =>
                            `<a href="${photo.links.download}" target="_blank" class="download_link">
                                <img src="${photo.urls.small}" alt="Images from the api">
                            </a>`
                    )
                    .join('')}</div>`;
            });
        // *API NO 2
        fetch(api_no_two, {
            method: 'GET',
        })
            .then((resp) => {
                if (resp.ok) return resp.json();
                else return Promise.reject(resp);
            })
            .then((data) => {
                console.log(data);

                div_for_page_no_two.innerHTML = `<div class="inner_div_for_page_no_two">${data.results
                    .map(
                        (photo) =>
                            `<a href="${photo.links.download}" target="_blank" class="download_link">
                                <img src="${photo.urls.small}" alt="Images from the api">
                            </a>`
                    )
                    .join('')}</div>`;
            });
        // *API NO 3
        fetch(api_no_three, {
            method: 'GET',
        })
            .then((resp) => {
                if (resp.ok) return resp.json();
                else return Promise.reject(resp);
            })
            .then((data) => {
                console.log(data);

                div_for_page_no_three.innerHTML = `<div class="inner_div_for_page_no_three">${data.results
                    .map(
                        (photo) =>
                            `<a href="${photo.links.download}" target="_blank" class="download_link">
                                <img src="${photo.urls.small}" alt="Images from the api">
                            </a>`
                    )
                    .join('')}</div>`;
            });
    }, 50);
}

var list_image = [];
function fetchImage(callback = () => {}){
  let link = 'https://api.jsonbin.io/v3/b/64a7f8ea9d312622a37bb674';
  axios.get(link)
  .then(res => res.data)
  .then(res => res.record)
  .then(res => {
    callback(res);
  }).catch(err => alert(err));
}
function renderImage(list_image){
  console.log(list_image);
  list_image.forEach(image => {
    $('.galeri-wrapper').append(`
    <div class="img-wrapper">
      <div class="img-info">
        <h4>${image.name}</h4>
        <small>By ${image.by} <sup><a target="__blank" href="${image.author_link}"><i class="ri-arrow-right-up-line"></i></a></sup></small>
      </div>
      <img src="${image.image_link}" alt="${image.name}">
    </div>
    `);
  });
}
$(() => {
  fetchImage(renderImage);
});
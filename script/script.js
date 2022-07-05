$(function() {
  $(".detail-sub-item").each(function(index, elem) {
    const id_name = $(elem).attr("id");
    const elem_text = $(elem).children(".detail-sub-title").children().text();
    $(".proc-list ul").append(`<li><a href="#${id_name}">${elem_text}</a></li>`)
  })
})
var burger = document.querySelector('.burger');
var ul = document.querySelector('.list-links');

function slide()
{
    burger.addEventListener('click', function()
    {
        ul.classList.toggle('toggle');
    })
}

slide();
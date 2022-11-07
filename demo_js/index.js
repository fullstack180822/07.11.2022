
function foo() {
    alert('hello world!')
}

// jquery works

const event = {
    target : {
        id : 'img1'
    }
} 
$('.smiley').on('mouseleave', function() 
        {
           $('#' + event.target.id).css({opacity :'0.5'});
        });
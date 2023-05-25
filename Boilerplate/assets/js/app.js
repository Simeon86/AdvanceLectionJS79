const accordion = document.querySelector('#accordionExample');

accordion.addEventListener('click', function(event){
    const target = event.target;
    const h2 = target.nodeName === 'h2' ? target : target.closest('h2');

    if(!h2) {
        return;
    }

    const accordionInfo = h2.parentNode.querySelector('.accordion-collapse.collapse');
    const collapsedItem = this.querySelector('.show');

    if(collapsedItem) {
        collapsedItem.classList.remove('show');
    }

    if(collapsedItem != accordionInfo) {
        accordionInfo.classList.add('show');
    }
})




        function addHoverEffect(element) {
            element.addEventListener('mouseover', function() {
                element.classList.remove('bg-opacity-50');
                element.idList.add('bg-opacity-80');
                
            });

            element.addEventListener('mouseout', function() {
                element.classList.remove('bg-opacity-80');
                element.classList.add('bg-opacity-50');

            });

        }

window.addEventListener('load', function() {

    // Wait for the DOM to load
    // constants defined
    const leftDiv = document.getElementById('leftDiv');
    const rightDiv = document.getElementById('rightDiv');

    addHoverEffect(leftDiv);
    addHoverEffect(rightDiv);

    leftDiv.classList.add('slide-inLeft');
    rightDiv.classList.add('slide-inRight');
});

/*            Timeline Event                    */
// Select Timeline DOM's
const timelineArea = document.querySelector('aside');
const timelineButton = document.querySelector('#timeline-button');
const timeline = document.querySelector('.timeline');
const timelineHeading = document.querySelector('.icon-heading h2');

// Add the click event
timelineButton.addEventListener('click', function() {
    if (!timelineButton.classList.value.includes('rotate')) {
        timelineButton.classList.add('rotated');
        timelineArea.classList.add('timelined');
        timeline.classList.remove('hide-filtered');
        timelineHeading.classList.remove('hide-filtered');
    } else {
        removeClasses()
    }
})

// Create function for removing classes
function removeClasses() {
        timelineButton.classList.remove('rotated');
        timelineArea.classList.remove('timelined');
        timeline.classList.add('hide-filtered');
        timelineHeading.classList.add('hide-filtered');
}
/* Timeline Event is done */
//====================================


import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', function () {
  new Accordion('.faq-accordion-js', {
    duration: 400,
    showMultiple: true,
    elementClass: 'faq-accordion-item',
    triggerClass: 'faq-arrow-button',
    panelClass: 'faq-accordion-panel',
  });
});

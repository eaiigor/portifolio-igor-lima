import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stacks',
  templateUrl: './stacks.component.html',
  styleUrls: ['./stacks.component.scss']
})
export class StacksComponent implements OnInit {

  ngOnInit(): void {
    const iconContainers = document.querySelectorAll('.stacks-grid > div');
    const description = document.getElementById('description');

    iconContainers.forEach(container => {
      container.addEventListener('mouseover', () => {
        const fs32Element = container.querySelector('.fs-32');
        if (fs32Element) {
          const iconDescription = fs32Element.getAttribute('data-description');
          if (description) {
          description.classList.remove('animate__animated','animate__fadeIn');
          description.classList.add('animate__animated','animate__fadeIn');
            description.textContent = iconDescription || '';
          }
        }
      });
      
      container.addEventListener('mouseout', () => {
        if (description) {
          description.classList.remove('animate__animated','animate__fadeIn');
          description.textContent = '*passe o cursor do mouse no card para ler*'; 
        }
      });
    });
  }

}
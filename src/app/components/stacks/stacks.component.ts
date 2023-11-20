import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stacks',
  templateUrl: './stacks.component.html',
  styleUrls: ['./stacks.component.scss']
})
export class StacksComponent implements OnInit {

  ngOnInit(): void {
    const icons = document.querySelectorAll('.fs-32');
    const description = document.getElementById('description');

    icons.forEach(icon => {
      icon.addEventListener('mouseover', () => {
        const iconDescription = icon.getAttribute('data-description');
        if (description) {
          description.textContent = iconDescription || '';
        }
      });

      icon.addEventListener('mouseout', () => {
        if (description) {
          description.textContent = '*passe o cursor do mouse no card para ler*';
        }
      });
    });
  }

}
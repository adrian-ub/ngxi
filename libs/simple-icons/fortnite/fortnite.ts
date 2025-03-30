import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siFortnite],svg[si-fortnite]',
  host: {
    role: 'img',
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  template: `<svg:title>Fortnite</svg:title>
    <svg:path
      d="m15.767 14.171.097-5.05H12.4V5.197h3.99L16.872 0H7.128v24l5.271-.985V14.17z"
    />`,
})
export class SiFortnite {}

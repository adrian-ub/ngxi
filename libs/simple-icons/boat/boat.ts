import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siBoat],svg[si-boat]',
  host: {
    role: 'img',
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  template: `<svg:title>boAt</svg:title>
    <svg:path
      d="M12.081 0 5.833 17.686 17.15 13.93Zm-10.2 18.223L4.961 24H19.14l2.98-5.777z"
    />`,
})
export class SiBoat {}

import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsJustifyStretchIcon],svg[radix-icons-justify-stretch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 1.05a.45.45 0 0 1 .45.45v12a.45.45 0 0 1-.9 0v-12a.45.45 0 0 1 .45-.45zm-12 0a.45.45 0 0 1 .45.45v12a.45.45 0 0 1-.9 0v-12a.45.45 0 0 1 .45-.45zM4 6h7v3H4V6zm7.25-1a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75h-7.5A.75.75 0 0 1 3 9.25v-3.5A.75.75 0 0 1 3.75 5h7.5z" fill="currentColor"></svg:path></svg:g>`
})
export class RadixIconsJustifyStretchIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}

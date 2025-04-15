import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsJustifyStartIcon],svg[radix-icons-justify-start-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M1.05 13.5a.45.45 0 0 0 .9 0v-12a.45.45 0 1 0-.9 0v12zM11 9H4V6h7v3zm-7.25 1A.75.75 0 0 1 3 9.25v-3.5A.75.75 0 0 1 3.75 5h7.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75h-7.5z" fill="currentColor"></svg:path></svg:g>`
})
export class RadixIconsJustifyStartIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}

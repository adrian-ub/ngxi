import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsAllSidesIcon],svg[radix-icons-all-sides-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5.75L9.75 3h-4.5zm0 13.5L9.75 12h-4.5zm-4.5-9L.75 7.5L3 9.75zM14.25 7.5L12 5.25v4.5z" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsAllSidesIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}

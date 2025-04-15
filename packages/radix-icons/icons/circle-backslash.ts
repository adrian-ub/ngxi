import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsCircleBackslashIcon],svg[radix-icons-circle-backslash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5.877a6.623 6.623 0 1 0 0 13.246A6.623 6.623 0 0 0 7.5.877M3.858 3.151a5.673 5.673 0 0 1 7.992 7.992zm-.707.707a5.673 5.673 0 0 0 7.992 7.992z" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsCircleBackslashIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}

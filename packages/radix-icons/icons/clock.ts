import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsClockIcon],svg[radix-icons-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5.877a6.623 6.623 0 1 0 0 13.246A6.623 6.623 0 0 0 7.5.877M1.827 7.5a5.673 5.673 0 1 1 11.346 0a5.673 5.673 0 0 1-11.346 0M8 4.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 .146.354l2 2a.5.5 0 0 0 .708-.708L8 7.293z" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsClockIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}

import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsMinusCircledIcon],svg[radix-icons-minus-circled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5.877a6.623 6.623 0 1 0 0 13.246A6.623 6.623 0 0 0 7.5.877M1.827 7.5a5.673 5.673 0 1 1 11.346 0a5.673 5.673 0 0 1-11.346 0M4.5 7a.5.5 0 0 0 0 1h6a.5.5 0 1 0 0-1z" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsMinusCircledIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}

import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsArrowBottomRightIcon],svg[radix-icons-arrow-bottom-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.646 3.646a.5.5 0 0 0 0 .708L10.293 11H6a.5.5 0 0 0 0 1h5.5a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-1 0v4.293L4.354 3.646a.5.5 0 0 0-.708 0" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsArrowBottomRightIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}

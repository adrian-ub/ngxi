import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsDoubleArrowLeftIcon],svg[radix-icons-double-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.854 3.854a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L3.207 7.5zm6 0a.5.5 0 0 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L9.207 7.5z" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsDoubleArrowLeftIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}

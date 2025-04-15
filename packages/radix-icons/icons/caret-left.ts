import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsCaretLeftIcon],svg[radix-icons-caret-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.818 4.182a.45.45 0 0 1 0 .636L6.136 7.5l2.682 2.682a.45.45 0 1 1-.636.636l-3-3a.45.45 0 0 1 0-.636l3-3a.45.45 0 0 1 .636 0" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsCaretLeftIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}

import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsFontItalicIcon],svg[radix-icons-font-italic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.675 3.5a.45.45 0 0 1 .45-.45h4.5a.45.45 0 1 1 0 .9h-1.62l-1.774 7.1h1.644a.45.45 0 0 1 0 .9h-4.5a.45.45 0 1 1 0-.9h1.619l1.775-7.1H6.125a.45.45 0 0 1-.45-.45" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsFontItalicIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}

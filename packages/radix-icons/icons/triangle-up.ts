import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsTriangleUpIcon],svg[radix-icons-triangle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 9h7L7.5 4.5z"></svg:path>`
})
export class RadixIconsTriangleUpIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}

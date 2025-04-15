import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsDotsHorizontalIcon],svg[radix-icons-dots-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.625 7.5a1.125 1.125 0 1 1-2.25 0a1.125 1.125 0 0 1 2.25 0m5 0a1.125 1.125 0 1 1-2.25 0a1.125 1.125 0 0 1 2.25 0M12.5 8.625a1.125 1.125 0 1 0 0-2.25a1.125 1.125 0 0 0 0 2.25" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsDotsHorizontalIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}

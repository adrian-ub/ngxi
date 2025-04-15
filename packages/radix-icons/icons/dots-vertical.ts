import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsDotsVerticalIcon],svg[radix-icons-dots-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.625 2.5a1.125 1.125 0 1 1-2.25 0a1.125 1.125 0 0 1 2.25 0m0 5a1.125 1.125 0 1 1-2.25 0a1.125 1.125 0 0 1 2.25 0M7.5 13.625a1.125 1.125 0 1 0 0-2.25a1.125 1.125 0 0 0 0 2.25" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsDotsVerticalIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}

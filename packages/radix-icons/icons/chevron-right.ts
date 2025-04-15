import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsChevronRightIcon],svg[radix-icons-chevron-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.158 3.135a.5.5 0 0 1 .707.023l3.75 4a.5.5 0 0 1 0 .684l-3.75 4a.5.5 0 1 1-.73-.684L9.566 7.5l-3.43-3.658a.5.5 0 0 1 .023-.707" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsChevronRightIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}

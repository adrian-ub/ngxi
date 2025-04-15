import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsChevronUpIcon],svg[radix-icons-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.135 8.842a.5.5 0 0 0 .707.023L7.5 5.435l3.658 3.43a.5.5 0 0 0 .684-.73l-4-3.75a.5.5 0 0 0-.684 0l-4 3.75a.5.5 0 0 0-.023.707" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsChevronUpIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}

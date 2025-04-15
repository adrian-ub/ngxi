import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsThickArrowDownIcon],svg[radix-icons-thick-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 .407.79l-5 7a.5.5 0 0 1-.814 0l-5-7A.5.5 0 0 1 2.5 6H5zM6 4v2.5a.5.5 0 0 1-.5.5H3.472L7.5 12.64L11.528 7H9.5a.5.5 0 0 1-.5-.5V4z" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsThickArrowDownIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}

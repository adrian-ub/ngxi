import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsFileMinusIcon],svg[radix-icons-file-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 2.5a.5.5 0 0 1 .5-.5h5.793L12 4.707V12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5zM3.5 1A1.5 1.5 0 0 0 2 2.5v10A1.5 1.5 0 0 0 3.5 14h8a1.5 1.5 0 0 0 1.5-1.5V4.604a.75.75 0 0 0-.22-.53L9.854 1.145A.5.5 0 0 0 9.5 1zm1.75 6a.5.5 0 0 0 0 1h4.5a.5.5 0 0 0 0-1z" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsFileMinusIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}

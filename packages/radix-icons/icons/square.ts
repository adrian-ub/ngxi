import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsSquareIcon],svg[radix-icons-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 1h13v13H1zm1 1v11h11V2z" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsSquareIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}

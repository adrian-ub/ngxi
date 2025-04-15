import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsAlignCenterVerticallyIcon],svg[radix-icons-align-center-vertically-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 1a1 1 0 0 0-1 1v5H1.5a.5.5 0 0 0 0 1H6v5a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V8h4.5a.5.5 0 0 0 0-1H9V2a1 1 0 0 0-1-1z" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsAlignCenterVerticallyIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}

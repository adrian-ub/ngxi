import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsTextAlignJustifyIcon],svg[radix-icons-text-align-justify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 4a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1zM2 7.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsTextAlignJustifyIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}

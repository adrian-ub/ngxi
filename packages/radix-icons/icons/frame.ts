import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsFrameIcon],svg[radix-icons-frame-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 1.5a.5.5 0 0 0-1 0V4H5V1.5a.5.5 0 0 0-1 0V4H1.5a.5.5 0 0 0 0 1H4v5H1.5a.5.5 0 0 0 0 1H4v2.5a.5.5 0 0 0 1 0V11h5v2.5a.5.5 0 0 0 1 0V11h2.5a.5.5 0 0 0 0-1H11V5h2.5a.5.5 0 0 0 0-1H11zM10 10V5H5v5z" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsFrameIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}

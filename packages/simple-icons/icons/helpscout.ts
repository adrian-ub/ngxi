import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsHelpscoutIcon],svg[simple-icons-helpscout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.497 14.044l7.022-7.021a4.95 4.95 0 0 0 1.474-3.526A5 5 0 0 0 10.563 0L3.54 7.024a4.95 4.95 0 0 0-1.473 3.525c0 1.373.55 2.6 1.43 3.496zm17.007-4.103l-7.023 7.022a4.95 4.95 0 0 0-1.473 3.525c0 1.36.55 2.601 1.43 3.497l7.022-7.022a4.94 4.94 0 0 0 1.474-3.526c0-1.373-.55-2.6-1.43-3.496m-.044-2.904a4.94 4.94 0 0 0 1.474-3.525c0-1.36-.55-2.6-1.43-3.497L3.54 16.965A4.986 4.986 0 0 0 3.497 24Z"></svg:path>`
})
export class SimpleIconsHelpscoutIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}

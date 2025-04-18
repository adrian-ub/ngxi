import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siPlayForwardFillIcon],svg[si-play-forward-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.573 4.18A1 1 0 0 0 3 5v14a1 1 0 0 0 1.573.82L10 16.02V19a1 1 0 0 0 1.573.82l10-7a1 1 0 0 0 0-1.64l-10-7A1 1 0 0 0 10 5v2.98zM12 9.38l2.573 1.8a1 1 0 0 1 0 1.64L12 14.62v2.46L19.256 12L12 6.92z" clip-rule="evenodd"></svg:path>`,
})
export class SiPlayForwardFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

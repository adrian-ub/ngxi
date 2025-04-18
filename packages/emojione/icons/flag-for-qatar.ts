import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFlagForQatarIcon],svg[emojione-flag-for-qatar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#c94747" d="M32 2c-5.3 0-10.2 1.4-14.5 3.7v52.5C21.8 60.6 26.7 62 32 62c16.6 0 30-13.4 30-30S48.6 2 32 2"></svg:path><svg:path fill="#9450e0" d="M32 2c-5.3 0-10.2 1.4-14.5 3.7v52.5C21.8 60.6 26.7 62 32 62c16.6 0 30-13.4 30-30S48.6 2 32 2" opacity=".33"></svg:path><svg:path fill="#f9f9f9" d="M2 32c0 11.3 6.3 21.1 15.5 26.3L28 56l-10-3l10-3l-10-3l10-3l-10-3l10-3l-10-3l10-3l-10-3l10-3l-10-3l10-3l-10-3l10-3l-10-3l10-3l-10.5-2.3C8.3 10.9 2 20.7 2 32"></svg:path>`,
})
export class EmojioneFlagForQatarIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

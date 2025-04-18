import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFlagForBahrainIcon],svg[emojione-flag-for-bahrain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f9f9f9" d="M26.8 61.5L36 56l-10-6l10-6l-10-6l10-6l-10-6l10-6l-10-6l10-6l-9.2-5.5C12.7 4.9 2 17.2 2 32s10.7 27.1 24.8 29.5"></svg:path><svg:path fill="#c94747" d="M32 2c-1.8 0-3.5.2-5.2.5L36 8l-10 6l10 6l-10 6l10 6l-10 6l10 6l-10 6l10 6l-9.2 5.5c1.7.3 3.4.5 5.2.5c16.6 0 30-13.4 30-30S48.6 2 32 2"></svg:path>`,
})
export class EmojioneFlagForBahrainIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

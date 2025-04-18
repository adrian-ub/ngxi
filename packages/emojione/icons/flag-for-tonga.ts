import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFlagForTongaIcon],svg[emojione-flag-for-tonga-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f9f9f9" d="M26 2.6C12.3 5.4 2 17.5 2 32h24z"></svg:path><svg:g fill="#c94747"><svg:path d="M32 2q-3.15 0-6 .6V32H2c0 16.6 13.4 30 30 30s30-13.4 30-30S48.6 2 32 2"></svg:path><svg:path d="M22 18h-5v-5h-4v5H8v4h5v5h4v-5h5z"></svg:path></svg:g>`,
})
export class EmojioneFlagForTongaIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

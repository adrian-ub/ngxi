import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFlagForJapanIcon],svg[emojione-flag-for-japan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#f5f5f5"></svg:circle><svg:circle cx="32" cy="32" r="12" fill="#ed4c5c"></svg:circle>`,
})
export class EmojioneFlagForJapanIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFlagForPalauIcon],svg[emojione-flag-for-palau-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#42ade2"></svg:circle><svg:circle cx="24" cy="32" r="16" fill="#ffe62e"></svg:circle>`,
})
export class EmojioneFlagForPalauIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

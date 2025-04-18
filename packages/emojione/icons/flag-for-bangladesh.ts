import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFlagForBangladeshIcon],svg[emojione-flag-for-bangladesh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#75a843"></svg:circle><svg:circle cx="32" cy="32" r="30" fill="#699635"></svg:circle><svg:circle cx="26" cy="32" r="14.1" fill="#ed4c5c"></svg:circle>`,
})
export class EmojioneFlagForBangladeshIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

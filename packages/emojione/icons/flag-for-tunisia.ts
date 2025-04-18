import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFlagForTunisiaIcon],svg[emojione-flag-for-tunisia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#ed4c5c"></svg:circle><svg:circle cx="32" cy="32" r="17.3" fill="#fff"></svg:circle><svg:circle cx="32" cy="32" r="13" fill="#ed4c5c"></svg:circle><svg:circle cx="35.5" cy="32" r="10.4" fill="#fff"></svg:circle><svg:path fill="#ed4c5c" d="m38.4 32l3.4-4.6l-5.4 1.8l-3.3-4.6v5.7L27.7 32l5.4 1.7v5.7l3.3-4.6l5.4 1.8z"></svg:path>`,
})
export class EmojioneFlagForTunisiaIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

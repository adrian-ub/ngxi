import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFlagForTaiwanIcon],svg[emojione-flag-for-taiwan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ed4c5c" d="M32 2v30H2c0 16.6 13.4 30 30 30s30-13.4 30-30S48.6 2 32 2"></svg:path><svg:path fill="#2a5f9e" d="M32 2C15.4 2 2 15.4 2 32h30z"></svg:path><svg:path fill="#fff" d="m24 20.3l5-1.3l-5-1.3l3.7-3.7l-5 1.3l1.3-5l-3.7 3.7L19 9l-1.3 5l-3.7-3.7l1.3 5l-5-1.3l3.7 3.7L9 19l5 1.3l-3.7 3.7l5-1.3l-1.3 5l3.7-3.7l1.3 5l1.3-5l3.7 3.7l-1.3-5l5 1.3z"></svg:path><svg:circle cx="19" cy="19" r="5.7" fill="#428bc1"></svg:circle><svg:circle cx="19" cy="19" r="5" fill="#fff"></svg:circle>`,
})
export class EmojioneFlagForTaiwanIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

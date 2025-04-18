import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFlagForPolandIcon],svg[emojione-flag-for-poland-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f9f9f9" d="M32 2c16.6 0 30 13.4 30 30H2C2 15.4 15.4 2 32 2"></svg:path><svg:path fill="#ed4c5c" d="M32 62C15.4 62 2 48.6 2 32h60c0 16.6-13.4 30-30 30"></svg:path>`,
})
export class EmojioneFlagForPolandIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

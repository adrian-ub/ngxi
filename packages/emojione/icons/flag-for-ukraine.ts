import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFlagForUkraineIcon],svg[emojione-flag-for-ukraine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ffe62e" d="M32 62c16.6 0 30-13.4 30-30H2c0 16.6 13.4 30 30 30"></svg:path><svg:path fill="#428bc1" d="M32 2C15.4 2 2 15.4 2 32h60C62 15.4 48.6 2 32 2"></svg:path>`,
})
export class EmojioneFlagForUkraineIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

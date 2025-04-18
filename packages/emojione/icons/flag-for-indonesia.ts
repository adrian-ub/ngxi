import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFlagForIndonesiaIcon],svg[emojione-flag-for-indonesia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f9f9f9" d="M31.8 62c16.6 0 30-13.4 30-30h-60c0 16.6 13.4 30 30 30"></svg:path><svg:path fill="#ed4c5c" d="M31.8 2c-16.6 0-30 13.4-30 30h60c0-16.6-13.4-30-30-30"></svg:path>`,
})
export class EmojioneFlagForIndonesiaIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFlagForCzechiaIcon],svg[emojione-flag-for-czechia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f9f9f9" d="M10.8 10.8V32H62C62 15.4 48.6 2 32 2c-8.3 0-15.8 3.4-21.2 8.8"></svg:path><svg:path fill="#ed4c5c" d="M10.8 32v21.2C16.2 58.6 23.7 62 32 62c16.6 0 30-13.4 30-30z"></svg:path><svg:path fill="#428bc1" d="M10.8 10.8C5.4 16.2 2 23.7 2 32s3.4 15.8 8.8 21.2L32 32z"></svg:path>`,
})
export class EmojioneFlagForCzechiaIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

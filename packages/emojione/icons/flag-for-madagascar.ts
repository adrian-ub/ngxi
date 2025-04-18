import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFlagForMadagascarIcon],svg[emojione-flag-for-madagascar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f9f9f9" d="M22 60.3V3.7C10.4 7.8 2 18.9 2 32s8.4 24.2 20 28.3"></svg:path><svg:path fill="#ed4c5c" d="M22 32h40C62 15.4 48.6 2 32 2c-3.5 0-6.9.6-10 1.7z"></svg:path><svg:path fill="#699635" d="M22 32v28.3c3.1 1.1 6.5 1.7 10 1.7c16.6 0 30-13.4 30-30z"></svg:path>`,
})
export class EmojioneFlagForMadagascarIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

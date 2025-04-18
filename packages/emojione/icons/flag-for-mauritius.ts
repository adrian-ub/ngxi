import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFlagForMauritiusIcon],svg[emojione-flag-for-mauritius-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ed4c5c" d="M32 2C21.3 2 11.9 7.6 6.6 16h50.7C52.1 7.6 42.7 2 32 2"></svg:path><svg:path fill="#2a5f9e" d="M6.6 16C3.7 20.6 2 26.1 2 32h60c0-5.9-1.7-11.4-4.6-16z"></svg:path><svg:path fill="#699635" d="M6.6 48c5.3 8.4 14.7 14 25.4 14s20.1-5.6 25.4-14z"></svg:path><svg:path fill="#ffce31" d="M57.4 48c2.9-4.6 4.6-10.1 4.6-16H2c0 5.9 1.7 11.4 4.6 16z"></svg:path>`,
})
export class EmojioneFlagForMauritiusIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

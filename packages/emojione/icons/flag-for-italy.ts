import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFlagForItalyIcon],svg[emojione-flag-for-italy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#75a843" d="M1.7 32c0 13.1 8.4 24.2 20 28.3V3.7C10.1 7.8 1.7 18.9 1.7 32"></svg:path><svg:path fill="#ed4c5c" d="M61.7 32c0-13.1-8.4-24.2-20-28.3v56.6c11.7-4.1 20-15.2 20-28.3"></svg:path><svg:path fill="#fff" d="M21.7 60.3c3.1 1.1 6.5 1.7 10 1.7s6.9-.6 10-1.7V3.7C38.6 2.6 35.2 2 31.7 2s-6.9.6-10 1.7z"></svg:path>`,
})
export class EmojioneFlagForItalyIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

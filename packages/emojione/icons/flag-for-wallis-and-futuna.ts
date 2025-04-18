import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFlagForWallisAndFutunaIcon],svg[emojione-flag-for-wallis-and-futuna-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#428bc1" d="M2 32c0 13.1 8.4 24.2 20 28.3V3.7C10.4 7.8 2 18.9 2 32"></svg:path><svg:path fill="#ed4c5c" d="M62 32c0-13.1-8.3-24.2-20-28.3v56.6C53.7 56.2 62 45.1 62 32"></svg:path><svg:path fill="#f9f9f9" d="M22 60.3c3.1 1.1 6.5 1.7 10 1.7s6.9-.6 10-1.7V3.7C38.9 2.6 35.5 2 32 2s-6.9.6-10 1.7z"></svg:path>`,
})
export class EmojioneFlagForWallisAndFutunaIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

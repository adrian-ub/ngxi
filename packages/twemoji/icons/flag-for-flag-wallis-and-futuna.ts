import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagForFlagWallisAndFutunaIcon],svg[twemoji-flag-for-flag-wallis-and-futuna-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ED2939" d="M32 5H18v12H0v10a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4z"></svg:path><svg:path fill="#EEE" d="M0 16h19v2H0z"></svg:path><svg:path fill="#002395" d="M6 17H0V9a4 4 0 0 1 4-4h2v12z"></svg:path><svg:path fill="#EEE" d="M6 5h6v12H6zm11 0h2v13h-2z"></svg:path><svg:path fill="#ED2939" d="M12 5h6v12h-6z"></svg:path><svg:path d="M24.38 22.32h6.24L27.5 19.2zM30.62 14h-6.24l3.12 3.12zm1.04 7.28v-6.24l-3.12 3.12zm-8.32-6.24v6.24l3.12-3.12z" fill="#FFF"></svg:path>`,
})
export class TwemojiFlagForFlagWallisAndFutunaIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

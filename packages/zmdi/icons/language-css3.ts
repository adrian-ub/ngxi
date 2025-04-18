import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiLanguageCss3Icon],svg[zmdi-language-css3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M59 30h342l-31 156l-5 25l-24 121l-183 61L0 332l16-80h67l-6 33l95 36l111-36l15-77H24l13-67h274l9-44H46z"></svg:path>`,
})
export class ZmdiLanguageCss3Icon {
  readonly viewBox = input("0 0 408 400")
  readonly width = input("1.02em")
  readonly height = input("1em")
}

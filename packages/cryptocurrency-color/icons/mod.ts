import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorModIcon],svg[cryptocurrency-color-mod-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#09547d"></svg:circle><svg:g fill="#fff"><svg:path d="M22.985 21.007V8.08l-6.312 6.449z" opacity=".5"></svg:path><svg:path d="m9 7l.304.312l8.467 8.675L9 24.985z"></svg:path></svg:g></svg:g>`,
})
export class CryptocurrencyColorModIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

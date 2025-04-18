import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedAdsIcon],svg[token-branded-ads-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#5FB1FA"><svg:path d="M17.757 3.816H22v10.608h-.006a6.062 6.062 0 0 1-9.996 4.304a6.32 6.32 0 0 1-2.225-4.286v-.915a1.819 1.819 0 1 0-.467 1.915a6.97 6.97 0 0 0 2.152 3.698a6.062 6.062 0 1 1 .546-9.626a6.4 6.4 0 0 1 2.043 3.091c.14.485.072 1.013.072 1.516a1.82 1.82 0 0 0 3.638 0z"></svg:path><svg:path d="M17.15 8.18a6.1 6.1 0 0 0-4.649.946a6.97 6.97 0 0 1 2.219 3.65a1.813 1.813 0 0 1 2.43-.013z"></svg:path></svg:g>`,
})
export class TokenBrandedAdsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

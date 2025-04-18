import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorZilIcon],svg[cryptocurrency-color-zil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#49c1bf"></svg:circle><svg:g fill="#fff"><svg:path fill-opacity=".304" d="m9 7.281l11.114 5.383l2.845-1.282L11.891 6z"></svg:path><svg:path fill-opacity=".646" d="m20.114 12.651l2.845-1.281v2.865l-2.845 1.281zm0 13.284v-8.937l2.845-1.295v8.951z"></svg:path><svg:path d="M9 7.284v2.897l7.693 3.737L9 17.728v2.856l11.114 5.373v-2.874l-7.548-3.671l7.548-3.881v-2.865z"></svg:path></svg:g></svg:g>`,
})
export class CryptocurrencyColorZilIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

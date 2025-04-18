import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedCkbIcon],svg[token-branded-ckb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#fff" d="M3 4.125v9.563h2.813V4.124zm15.187 6.188v9.562H21v-9.562zM12 4.125v6.536l2.813 2.897v-6.62zM9.187 10.56v6.502L12 19.876v-6.294z"></svg:path><svg:path fill="#D8D8D8" d="M12 4.125h2.998L21 10.313h-2.813zm-9 9.563h2.813L12 19.875H9.002z"></svg:path><svg:path fill="#3CC68A" d="M14.813 6.937v6.587l-9-9.281v9.444l3.375 3.375v-6.34l9 9.153v-9.563z"></svg:path></svg:g>`,
})
export class TokenBrandedCkbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

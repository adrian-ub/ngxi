import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedHxdIcon],svg[token-branded-hxd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#F8C007"><svg:path d="M4.688 5.531v3.094h4.5V3z"></svg:path><svg:path d="M14.813 9.75H4.688v1.687h14.625V5.531L14.813 3zm4.5 4.5v-1.687H4.688v6.187l4.5 2.25v-6.75z"></svg:path><svg:path d="M19.312 15.375h-4.5V21l4.5-2.531z"></svg:path></svg:g>`,
})
export class TokenBrandedHxdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedXhvIcon],svg[token-branded-xhv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M14.813 8.794L6.374 13.98v5.332h2.812v-4.055l8.438-5.198V4.687h-2.812zm-1.688-.872V3h6.188v8.06l-8.438 5.074V21H4.688v-7.976zM4.688 3h6.187v4.922l-1.688.866v-4.1H6.375v5.833l-1.687.866zm8.437 13.129l1.688-.883v4.066h2.812v-5.81l1.688-.872V21h-6.188z"></svg:path>`,
})
export class TokenBrandedXhvIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

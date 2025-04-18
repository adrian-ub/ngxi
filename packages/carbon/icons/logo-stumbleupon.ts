import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonLogoStumbleuponIcon],svg[carbon-logo-stumbleupon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm-.09 10.45a.84.84 0 0 0-.84.84v5.14a3.55 3.55 0 0 1-7.1 0v-2.34h2.71v2.24a.84.84 0 0 0 1.68 0v-5a3.55 3.55 0 0 1 7.09 0v1l-1.58.51l-1.12-.51v-1a.85.85 0 0 0-.84-.88Zm7.93 6a3.55 3.55 0 0 1-7.09 0v-2.31l1.12.51l1.58-.51v2.29a.84.84 0 0 0 1.68 0v-2.24h2.71Z"></svg:path>`,
})
export class CarbonLogoStumbleuponIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

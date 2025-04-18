import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWallet24RegularIcon],svg[fluent-wallet-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 13.75a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75M3 5h.014A2.25 2.25 0 0 1 5.25 3h11.5A2.25 2.25 0 0 1 19 5.25v.837a3.25 3.25 0 0 1 2.5 3.163v8.5A3.25 3.25 0 0 1 18.25 21h-12A3.25 3.25 0 0 1 3 17.75zm15.25 2.5H4.5v10.25c0 .966.784 1.75 1.75 1.75h12A1.75 1.75 0 0 0 20 17.75v-8.5a1.75 1.75 0 0 0-1.75-1.75M17.5 6v-.75a.75.75 0 0 0-.75-.75H5.25a.75.75 0 0 0 0 1.5z"></svg:path>`,
})
export class FluentWallet24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

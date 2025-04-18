import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWalletOfSatoshiIcon],svg[arcticons-wallet-of-satoshi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.037 4.5h15.646a.884.884 0 0 1 .785 1.29L27.71 16.937a.83.83 0 0 0 .737 1.21h6.572c.968 0 1.494 1.133.87 1.872L16.054 43.5l3.316-16.831a.728.728 0 0 0-.714-.869h-6.175a.64.64 0 0 1-.628-.77L15.86 5.463c.114-.56.607-.962 1.178-.962"></svg:path>`,
})
export class ArcticonsWalletOfSatoshiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

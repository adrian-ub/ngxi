import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsQrCodeIcon],svg[healthicons-qr-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6 9a3 3 0 0 1 3-3h6v2H9a1 1 0 0 0-1 1v6H6zm7 6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm1 13a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zm0-2a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path><svg:path d="M15 23a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 0a1 1 0 1 1 2 0a1 1 0 0 1-2 0m3 3a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path><svg:path d="M20 24a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0 0a1 1 0 1 1 0-2a1 1 0 0 1 0 2m4 2a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path><svg:path d="M25 27a1 1 0 1 0-2 0a1 1 0 1 0-1 1a1 1 0 1 0 0 2a1 1 0 0 0 0-2a1 1 0 0 0 1-1a1 1 0 1 0 2 0m0 0a1 1 0 1 1 2 0a1 1 0 0 1-2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 0a1 1 0 1 1 2 0a1 1 0 0 1-2 0"></svg:path><svg:path d="M24 20a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0-2a1 1 0 1 0-1-1a1 1 0 0 0-1-1a1 1 0 1 0 0-2a1 1 0 0 0 0 2a1 1 0 1 0 1 1a1 1 0 0 0 1 1"></svg:path><svg:path d="M24 18a1 1 0 1 1 0 2a1 1 0 0 1 0-2m-1 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m1 11a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path><svg:path d="M23 33a1 1 0 1 1 2 0a1 1 0 0 1-2 0m0 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2-2a1 1 0 1 1 2 0a1 1 0 0 1-2 0m2-6a1 1 0 1 0 2 0a1 1 0 0 0-2 0m3-1a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path><svg:path d="M32 24a1 1 0 1 1 0-2a1 1 0 0 1 0 2m0 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2m-2 10a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path><svg:path d="M31 33a1 1 0 1 1 2 0a1 1 0 0 1-2 0m-3-3a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path><svg:path d="M30 30a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path><svg:path d="M31 29a1 1 0 1 1 2 0a1 1 0 0 1-2 0m-4-14a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zM6 39a3 3 0 0 0 3 3h6v-2H9a1 1 0 0 1-1-1v-6H6zM42 9a3 3 0 0 0-3-3h-6v2h6a1 1 0 0 1 1 1v6h2zm0 30a3 3 0 0 1-3 3h-6v-2h6a1 1 0 0 0 1-1v-6h2z"></svg:path></svg:g>`,
})
export class HealthiconsQrCodeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

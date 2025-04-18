import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsQrCodeOutlineIcon],svg[healthicons-qr-code-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6 9a3 3 0 0 1 3-3h6v2H9a1 1 0 0 0-1 1v6H6z"></svg:path><svg:path fill-rule="evenodd" d="M14 14a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zm1 2v2h2v-2zm-1 12a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zm1 2v2h2v-2z" clip-rule="evenodd"></svg:path><svg:path d="M13 25a1 1 0 1 0 1-1a1 1 0 0 0 1-1a1 1 0 1 0 2 0a1 1 0 0 0-2 0a1 1 0 1 0-1 1a1 1 0 0 0-1 1m4 0a1 1 0 1 0 2 0a1 1 0 1 0 1-1a1 1 0 1 0 0-2a1 1 0 0 0 0 2a1 1 0 0 0-1 1a1 1 0 1 0-2 0"></svg:path><svg:path d="M23 25a1 1 0 0 0 1 1a1 1 0 0 0-1 1a1 1 0 1 0-1 1a1 1 0 1 0 0 2a1 1 0 0 0 0-2a1 1 0 0 0 1-1a1 1 0 1 0 2 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0a1 1 0 0 0-1-1a1 1 0 1 0 0-2a1 1 0 0 0 1-1a1 1 0 1 0 2 0a1 1 0 0 0-2 0a1 1 0 0 0-1-1a1 1 0 1 0 0-2a1 1 0 1 0 0-2a1 1 0 1 0-1-1a1 1 0 0 0-1-1a1 1 0 1 0 0-2a1 1 0 0 0 0 2a1 1 0 1 0 1 1a1 1 0 0 0 1 1a1 1 0 1 0 0 2a1 1 0 0 0-1 1a1 1 0 1 0-2 0a1 1 0 0 0 2 0a1 1 0 0 0 1 1a1 1 0 1 0 0 2a1 1 0 0 0-1 1m0 6a1 1 0 0 0 1 1a1 1 0 0 0-1 1a1 1 0 1 0-2 0a1 1 0 0 0 2 0a1 1 0 1 0 1-1a1 1 0 0 0 1-1a1 1 0 1 0 2 0a1 1 0 0 0-2 0a1 1 0 1 0-2 0"></svg:path><svg:path d="M28 26a1 1 0 1 1 0-2a1 1 0 0 1 0 2m1-3a1 1 0 1 0 2 0a1 1 0 0 0 1 1a1 1 0 1 0 0 2a1 1 0 0 0 0-2a1 1 0 1 0-1-1a1 1 0 1 0-2 0m0 10a1 1 0 1 0 2 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0a1 1 0 1 0-2 0m-2-4a1 1 0 1 0 2 0a1 1 0 1 0 2 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0a1 1 0 1 0-2 0a1 1 0 1 0-2 0"></svg:path><svg:path fill-rule="evenodd" d="M27 15a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm2 3v-2h2v2z" clip-rule="evenodd"></svg:path><svg:path d="M6 39a3 3 0 0 0 3 3h6v-2H9a1 1 0 0 1-1-1v-6H6zM42 9a3 3 0 0 0-3-3h-6v2h6a1 1 0 0 1 1 1v6h2zm0 30a3 3 0 0 1-3 3h-6v-2h6a1 1 0 0 0 1-1v-6h2z"></svg:path></svg:g>`,
})
export class HealthiconsQrCodeOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

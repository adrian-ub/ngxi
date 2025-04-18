import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsQrCodeIcon],svg[majesticons-qr-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.001"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4 3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm1 6V5h4v4zm9-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM4 13a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm10 0a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1zm5 0a1 1 0 0 0-.707.293l-2 2a1 1 0 0 0 1.414 1.414L19.414 15H20a1 1 0 1 0 0-2zm-5 4a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2zm7 1a1 1 0 1 0-2 0v1h-1a1 1 0 1 0 0 2h2a1 1 0 0 0 1-1zM16 7a1 1 0 0 1 1-1h.001a1 1 0 1 1 0 2H17a1 1 0 0 1-1-1m-9 9a1 1 0 1 0 0 2h.001a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class MajesticonsQrCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

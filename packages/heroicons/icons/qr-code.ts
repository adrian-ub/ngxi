import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsQrCodeIcon],svg[heroicons-qr-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375zm0 9.75c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125zm9.75-9.75c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375z"></svg:path><svg:path d="M6.75 6.75h.75v.75h-.75zm0 9.75h.75v.75h-.75zm9.75-9.75h.75v.75h-.75zm-3 6.75h.75v.75h-.75zm0 6h.75v.75h-.75zm6-6h.75v.75h-.75zm0 6h.75v.75h-.75zm-3-3h.75v.75h-.75z"></svg:path></svg:g>`,
})
export class HeroiconsQrCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

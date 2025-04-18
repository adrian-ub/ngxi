import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEncryptIcon],svg[hugeicons-encrypt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m22 16l-2-2h-9.468a4.5 4.5 0 1 0 0 4H16.5l1.25-1.293L19 18h1zM6 16h1M3 3.5v5M6 7V5a1.5 1.5 0 1 1 3 0v2a1.5 1.5 0 1 1-3 0m6-3.5v5m3-5v5M18 7V5a1.5 1.5 0 0 1 3 0v2a1.5 1.5 0 0 1-3 0" color="currentColor"></svg:path>`,
})
export class HugeiconsEncryptIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

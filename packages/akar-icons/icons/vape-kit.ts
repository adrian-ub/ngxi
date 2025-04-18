import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsVapeKitIcon],svg[akar-icons-vape-kit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10a1 1 0 0 1 1-1h6v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm10 5a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v6h-8zm2-6h4v3h-4zM6 4h4v5H6zm2 0V2m9 7V6m0 11v-5"></svg:path>`,
})
export class AkarIconsVapeKitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

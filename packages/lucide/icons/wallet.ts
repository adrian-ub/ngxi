import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideWalletIcon],svg[lucide-wallet-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></svg:path><svg:path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></svg:path></svg:g>`,
})
export class LucideWalletIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}

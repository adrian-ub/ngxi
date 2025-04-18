import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHomeWifiIcon],svg[hugeicons-home-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19.73 11.9c.28-1.94.41-2.938.052-3.826c-.369-.916-1.188-1.543-2.826-2.797l-1.224-.937C13.695 2.78 12.676 2 11.5 2s-2.194.78-4.232 2.34l-1.224.937C4.406 6.531 3.587 7.158 3.218 8.074s-.22 1.95.08 4.018l.257 1.763c.425 2.931.638 4.397 1.63 5.27C6.178 20 7.63 20 10.532 20H11"></svg:path><svg:path d="M13 16.478C14.149 15.543 15.52 15 16.995 15c1.478 0 2.854.547 4.005 1.487M19.174 19a4.1 4.1 0 0 0-2.18-.64a4.1 4.1 0 0 0-2.17.634M17 22h.006"></svg:path></svg:g>`,
})
export class HugeiconsHomeWifiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSecurityWifiIcon],svg[hugeicons-security-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3 9.68v-.77c0-1.497 0-2.246.284-2.878c.175-.39.425-.742.738-1.039c.506-.481 1.224-.744 2.66-1.27L9.63 2.645C10.802 2.214 11.388 2 12 2s1.198.215 2.37.644l2.948 1.079c1.436.525 2.154.788 2.66 1.269c.313.297.563.65.738 1.04c.284.631.284 1.38.284 2.877v.772c0 2.403 0 3.605-.297 4.705a8.7 8.7 0 0 1-2.026 3.653c-.782.844-1.812 1.501-3.875 2.815c-.923.588-1.384.883-1.875 1.02a3.45 3.45 0 0 1-1.854 0c-.49-.137-.952-.432-1.875-1.02c-2.062-1.314-3.094-1.97-3.875-2.815a8.7 8.7 0 0 1-2.026-3.653C3 13.286 3 12.084 3 9.681"></svg:path><svg:path d="M8 9.478C9.149 8.543 10.52 8 11.995 8c1.478 0 2.854.547 4.005 1.487M14.174 12a4.1 4.1 0 0 0-2.18-.64a4.1 4.1 0 0 0-2.17.634M12 15h.006"></svg:path></svg:g>`,
})
export class HugeiconsSecurityWifiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

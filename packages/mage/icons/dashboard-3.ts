import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageDashboard3Icon],svg[mage-dashboard-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.318 2.75H4.682A1.93 1.93 0 0 0 2.75 4.682v3.885A1.93 1.93 0 0 0 4.682 10.5h14.636a1.93 1.93 0 0 0 1.932-1.932V4.682a1.93 1.93 0 0 0-1.932-1.932M8.567 13.5H4.682a1.93 1.93 0 0 0-1.932 1.933v3.885a1.93 1.93 0 0 0 1.932 1.932h3.885a1.93 1.93 0 0 0 1.932-1.932v-3.885A1.94 1.94 0 0 0 8.567 13.5m10.751 0h-3.885a1.94 1.94 0 0 0-1.932 1.933v3.885a1.93 1.93 0 0 0 1.932 1.932h3.885a1.933 1.933 0 0 0 1.932-1.932v-3.885a1.93 1.93 0 0 0-1.932-1.932"></svg:path>`,
})
export class MageDashboard3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

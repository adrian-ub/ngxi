import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDownwellIcon],svg[arcticons-downwell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.252 14.639h2.804v6.241h-2.804z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.771 31.281v8.321H22.45v-2.08h-2.081v-3.161h-2.08V19.762h-3.043v-3.043H5v-5.278h10.246v2.08h3.043v-3.043h2.08v-2.08h13.145v6.241h-2.841v6.241h5.124v-2.081H43v5.005H30.673v4.434"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.673 28.238h6.221v9.284h-3.043v-6.241h-3.08"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.804 28.238h7.87v3.043h-7.87z"></svg:path>`,
})
export class ArcticonsDownwellIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siSunnySnowingDuotoneIcon],svg[si-sunny-snowing-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M8 13c0-2.21 1.79-4 4-4s4 1.79 4 4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 13H1m22 0h-4M12 2v4M7.05 8.05L4.222 5.222m15.556 0L16.95 8.05M12 16h.1m3.9 0h.1m3.9 0h.1M8 16h.1m3.9 3h.1m-.1 3h.1m3.9-3h.1M8 19h.1M4 16h.1M8 13c0-2.21 1.79-4 4-4s4 1.79 4 4z"></svg:path></svg:g>`,
})
export class SiSunnySnowingDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsBatteryLowIcon],svg[akar-icons-battery-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="18" height="12" x="2" y="6" rx="2"></svg:rect><svg:path d="M7 10v4m13-4h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H20z"></svg:path></svg:g>`,
})
export class AkarIconsBatteryLowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

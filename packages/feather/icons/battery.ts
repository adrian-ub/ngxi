import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[featherBatteryIcon],svg[feather-battery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="18" height="12" x="1" y="6" rx="2" ry="2"></svg:rect><svg:path d="M23 13v-2"></svg:path></svg:g>`,
})
export class FeatherBatteryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

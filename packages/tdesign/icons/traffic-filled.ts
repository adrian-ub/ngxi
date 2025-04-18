import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTrafficFilledIcon],svg[tdesign-traffic-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2H6v4H3v2h3v3H3v2h3v3H3v2h3v4h12v-4h3v-2h-3v-3h3v-2h-3V8h3V6h-3zm-8 5a2 2 0 1 1 4 0a2 2 0 0 1-4 0m0 5a2 2 0 1 1 4 0a2 2 0 0 1-4 0m2 3a2 2 0 1 1 0 4a2 2 0 0 1 0-4"></svg:path>`,
})
export class TdesignTrafficFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

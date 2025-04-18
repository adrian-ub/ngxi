import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTrafficIcon],svg[tdesign-traffic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h12v4h3v2h-3v3h3v2h-3v3h3v2h-3v4H6v-4H3v-2h3v-3H3v-2h3V8H3V6h3zm2 2v16h8V4zm2 3a2 2 0 1 1 4 0a2 2 0 0 1-4 0m0 5a2 2 0 1 1 4 0a2 2 0 0 1-4 0m0 5a2 2 0 1 1 4 0a2 2 0 0 1-4 0"></svg:path>`,
})
export class TdesignTrafficIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

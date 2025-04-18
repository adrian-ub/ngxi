import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiFloorLampDualIcon],svg[cbi-floor-lamp-dual-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.928 1.984L2 5.982v.002l5.666 4.81l2.598-1.5zm6.187 0L13.78 9.297l2.6 1.5l5.664-4.813v-.002zm-4.535 8.862l-1.732 1L11 15.572V20H8v2h8v-2h-3v-4.352l2.195-3.802l-1.732-1l-1.442 2.496z"></svg:path>`,
})
export class CbiFloorLampDualIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

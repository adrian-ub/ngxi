import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFloorLampDualIcon],svg[mdi-floor-lamp-dual-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.73 10.06l-1.56 1.18l.83.96V20H8v2h8v-2h-3v-7.7l.85-1.04l-1.58-1.19zm-2.65.76L3 6.81L9.39 2l2.16 6.93zM14.61 2L21 6.81l-6.08 4.01l-2.48-1.87z"></svg:path>`,
})
export class MdiFloorLampDualIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixBatteryChargeIcon],svg[ix-battery-charge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M330.667 234.667H256l42.667-149.334l-160 192h74.666l-42.666 149.334zM85.334 341.334l87.527-.001L160.67 384H42.667V128h192.674l-35.555 42.666l-114.452.001zM426.667 384H233.992l35.556-42.667l114.452.001V170.667l-87.527-.001L308.663 128h118.004v85.333l42.667.001v85.333h-42.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxBatteryChargeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

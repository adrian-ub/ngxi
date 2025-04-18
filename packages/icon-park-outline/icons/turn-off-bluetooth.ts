import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineTurnOffBluetoothIcon],svg[icon-park-outline-turn-off-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M20.672 11.778V4l14.584 11.111l-7.179 4.445M32.5 35.974L20.675 44V29.628z"></svg:path><svg:path d="m4 12.5l40 23"></svg:path><svg:path stroke-linejoin="round" d="m7.444 34l13.231-4.373"></svg:path></svg:g>`,
})
export class IconParkOutlineTurnOffBluetoothIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

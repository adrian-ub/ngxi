import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenPinFill12Icon],svg[garden-pin-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.93.018c.184-.05.38.003.514.138l5.4 5.4a.532.532 0 0 1-.238.89L9.905 6.9a.53.53 0 0 1-.513-.138l-.473-.473l-2.198 5.38a.532.532 0 0 1-.868.175L3.38 9.372l-2.21 2.21a.532.532 0 1 1-.752-.752l2.21-2.21L.156 6.147A.532.532 0 0 1 .33 5.28l5.38-2.198l-.473-.473a.53.53 0 0 1-.138-.513l.455-1.7A.53.53 0 0 1 5.93.017"></svg:path>`,
})
export class GardenPinFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}

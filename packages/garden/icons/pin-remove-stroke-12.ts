import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenPinRemoveStroke12Icon],svg[garden-pin-remove-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.444.156l5.4 5.4a.532.532 0 0 1-.238.89L9.905 6.9a.53.53 0 0 1-.513-.138l-.473-.473l-.54 1.322l-.816-.815l.54-1.322l-1.577-1.577l-1.322.54l-.815-.816l1.322-.54l-.473-.473a.53.53 0 0 1-.138-.513l.455-1.7a.532.532 0 0 1 .89-.24m-.1 1.403l-.137.514l3.72 3.72l.514-.137zm.194 7.747l.815.815l-.632 1.548a.532.532 0 0 1-.868.175L3.38 9.372l-2.21 2.21a.532.532 0 1 1-.752-.752l2.21-2.21L.156 6.147A.532.532 0 0 1 .33 5.28l1.548-.632l.815.815l-1.22.499l4.565 4.566zm-4.684-7.16a.5.5 0 1 0-.708.708l8 8a.5.5 0 0 0 .708-.708z"></svg:path>`,
})
export class GardenPinRemoveStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}

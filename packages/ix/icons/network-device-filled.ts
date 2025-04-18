import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixNetworkDeviceFilledIcon],svg[ix-network-device-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M426.667 42.668v256H277.333l.02 46.315c18.176 6.431 32.581 20.841 39.006 39.02l152.974-.002v42.667l-152.981.019c-8.792 24.848-32.493 42.648-60.352 42.648s-51.56-17.8-60.351-42.648l-152.982-.019v-42.667l152.974.002c6.427-18.186 20.841-32.6 39.028-39.027l-.002-46.308H85.333v-256zM256 384.001c-11.782 0-21.333 9.552-21.333 21.334s9.551 21.333 21.333 21.333s21.333-9.551 21.333-21.333s-9.551-21.334-21.333-21.334"></svg:path>`,
})
export class IxNetworkDeviceFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

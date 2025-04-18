import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phDeviceRotateFillIcon],svg[ph-device-rotate-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m205.66 221.66l-24 24A8 8 0 0 1 168 240v-16H80a24 24 0 0 1-24-24v-96a8 8 0 0 1 16 0v96a8 8 0 0 0 8 8h88v-16a8 8 0 0 1 13.66-5.66l24 24a8 8 0 0 1 0 11.32M80 72a8 8 0 0 0 8-8V48h88a8 8 0 0 1 8 8v96a8 8 0 0 0 16 0V56a24 24 0 0 0-24-24H88V16a8 8 0 0 0-13.66-5.66l-24 24a8 8 0 0 0 0 11.32l24 24A8 8 0 0 0 80 72"></svg:path>`,
})
export class PhDeviceRotateFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

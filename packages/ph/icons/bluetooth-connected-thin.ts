import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBluetoothConnectedThinIcon],svg[ph-bluetooth-connected-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M194.4 172.8L134.67 128l59.73-44.8a4 4 0 0 0 0-6.4l-64-48A4 4 0 0 0 124 32v88L66.4 76.8a4 4 0 0 0-4.8 6.4l59.73 44.8l-59.73 44.8a4 4 0 0 0 4.8 6.4L124 136v88a4 4 0 0 0 6.4 3.2l64-48a4 4 0 0 0 0-6.4M132 40l53.33 40L132 120Zm0 176v-80l53.33 40Zm-72-80a8 8 0 1 1 8-8a8 8 0 0 1-8 8m152-8a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhBluetoothConnectedThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

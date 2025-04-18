import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBluetoothConnectedFillIcon],svg[ph-bluetooth-connected-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 176a8 8 0 0 1-3.2 6.4l-64 48a8 8 0 0 1-4.8 1.6a8 8 0 0 1-8-8v-80l-51.2 38.4a8 8 0 0 1-9.6-12.8l55.47-41.6L59.2 86.4a8 8 0 0 1 9.6-12.8L120 112V32a8 8 0 0 1 12.8-6.4l64 48a8 8 0 0 1 0 12.8L141.33 128l55.47 41.6a8 8 0 0 1 3.2 6.4M72 128a12 12 0 1 0-12 12a12 12 0 0 0 12-12m132-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhBluetoothConnectedFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

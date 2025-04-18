import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBluetoothSlashIcon],svg[ph-bluetooth-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m221.92 210.62l-160-176a8 8 0 0 0-11.84 10.76l70.84 77.93L59.2 169.6a8 8 0 1 0 9.6 12.8L120 144v80a8 8 0 0 0 12.8 6.4l50.83-38.12l26.45 29.1a8 8 0 1 0 11.84-10.76M136 208v-64l11.73 8.8l25.08 27.59ZM120 71.63V32a8 8 0 0 1 12.8-6.4l64 48a8 8 0 0 1 0 12.8l-33.53 25.15a8 8 0 0 1-9.6-12.8l25-18.75L136 48v23.63a8 8 0 0 1-16 0"></svg:path>`,
})
export class PhBluetoothSlashIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

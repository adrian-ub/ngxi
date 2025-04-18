import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBluetoothConnectedBoldIcon],svg[ph-bluetooth-connected-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M199.2 166.4L148 128l51.2-38.4a12 12 0 0 0 0-19.2l-64-48A12 12 0 0 0 116 32v72L71.2 70.4a12 12 0 0 0-14.4 19.2L108 128l-51.2 38.4a12 12 0 1 0 14.4 19.2L116 152v72a12 12 0 0 0 19.2 9.6l64-48a12 12 0 0 0 0-19.2M140 56l32 24l-32 24Zm0 144v-48l32 24Zm-84-56a16 16 0 1 1 16-16a16 16 0 0 1-16 16m168-16a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhBluetoothConnectedBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

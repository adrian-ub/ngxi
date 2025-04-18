import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBluetoothSlashBoldIcon],svg[ph-bluetooth-slash-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m224.88 207.93l-160-176a12 12 0 0 0-17.76 16.14L115 122.75L56.8 166.4a12 12 0 1 0 14.4 19.2L116 152v72a12 12 0 0 0 19.2 9.6l47.91-35.94l24 26.41a12 12 0 0 0 17.76-16.14ZM140 200v-48l5 3.77l21.87 24.06ZM116 59.74V32a12 12 0 0 1 19.2-9.6l64 48a12 12 0 0 1 0 19.2l-27.1 20.33a12 12 0 0 1-14.4-19.2L172 80l-32-24v3.74a12 12 0 0 1-24 0"></svg:path>`,
})
export class PhBluetoothSlashBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

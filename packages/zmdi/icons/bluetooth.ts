import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiBluetoothIcon],svg[zmdi-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m271 124l-92 92l92 92l-122 121h-21V267l-98 98l-30-30l119-119L0 97l30-30l98 98V3h21zM171 84v81l40-41zm40 224l-40-41v81z"></svg:path>`,
})
export class ZmdiBluetoothIcon {
  readonly viewBox = input("0 0 272 432")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

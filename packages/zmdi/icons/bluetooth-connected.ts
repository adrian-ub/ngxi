import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiBluetoothConnectedIcon],svg[zmdi-bluetooth-connected-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m85 216l-42 43l-43-43l43-43zm229-92l-92 92l92 92l-122 121h-21V267l-98 98l-30-30l119-119L43 97l30-30l98 98V3h21zM213 84v81l40-41zm40 224l-40-41v81zm88-135l43 43l-43 43l-42-43z"></svg:path>`,
})
export class ZmdiBluetoothConnectedIcon {
  readonly viewBox = input("0 0 384 432")
  readonly width = input("0.89em")
  readonly height = input("1em")
}

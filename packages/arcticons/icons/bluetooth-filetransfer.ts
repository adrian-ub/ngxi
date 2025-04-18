import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBluetoothFiletransferIcon],svg[arcticons-bluetooth-filetransfer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m9.82 34.212l20.048-19.933L20.075 4.5v39l9.793-9.779L9.82 13.788"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.177 18.789L24.936 24l5.241 5.211M24.936 24H38.18"></svg:path>`,
})
export class ArcticonsBluetoothFiletransferIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

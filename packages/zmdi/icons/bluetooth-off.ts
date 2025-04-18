import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiBluetoothOffIcon],svg[zmdi-bluetooth-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 84v69l-43-43V3h22l121 121l-64 65l-30-30l34-35zM30 45l311 312l-30 30l-49-49l-91 91h-22V267l-98 98l-30-30l120-119L0 75zm162 303l40-40l-40-41z"></svg:path>`,
})
export class ZmdiBluetoothOffIcon {
  readonly viewBox = input("0 0 344 432")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsBluetoothOriginalIcon],svg[lineicons-bluetooth-original-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m36.4 32.4l11.3-12.5L30 1v24.9L19.5 15.5l-3.8 3.9l13.1 13.1l-13.1 13.2l3.8 3.8L30 39l.3 24l18-18zm5-12.4l-6.1 6.1V14zm-6.2 18.9l6.1 6.1l-6.1 6z"></svg:path>`,
})
export class LineiconsBluetoothOriginalIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

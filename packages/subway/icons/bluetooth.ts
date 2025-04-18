import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayBluetoothIcon],svg[subway-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M375.4 157.5L217.8 0v196.9L139 118.1l-39.4 39.4l98.5 98.5l-98.5 98.5l39.4 39.4l78.8-78.8V512l157.5-157.5l-98.4-98.5zm-118.2-59l59.1 59.1l-59.1 59.1zm59.1 256l-59.1 59.1V295.4z"></svg:path>`,
})
export class SubwayBluetoothIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

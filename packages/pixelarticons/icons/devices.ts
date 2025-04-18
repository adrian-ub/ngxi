import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsDevicesIcon],svg[pixelarticons-devices-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h16v6h4v14H12v-6H2zm14 6V4H4v10h8V8zm-6-2H6v2h4zm10 14V10h-6v10zm-4-4h2v2h-2zM6 10h4v2H6z"></svg:path>`,
})
export class PixelarticonsDevicesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

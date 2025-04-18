import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiWifiOutlineIcon],svg[zmdi-wifi-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M249 42Q144 42 59 97l190 237L438 97q-84-55-189-55m-.5-39q49.5 0 96 11T425 43.5t47 27T497 88L249 397L0 88q12-9 25-17.5t47.5-27T153 14t95.5-11"></svg:path>`,
})
export class ZmdiWifiOutlineIcon {
  readonly viewBox = input("0 0 504 400")
  readonly width = input("1.26em")
  readonly height = input("1em")
}

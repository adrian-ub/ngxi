import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiWifiOffIcon],svg[zmdi-wifi-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M497 125L380 270L160 50q44-10 88-10q136 0 249 85M356 301l74 74l-27 27l-71-71l-83 103l-1 1v-1L0 125q35-27 79-47L35 34L62 7z"></svg:path>`,
})
export class ZmdiWifiOffIcon {
  readonly viewBox = input("0 0 504 440")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

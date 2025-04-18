import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiWifiInfoIcon],svg[zmdi-wifi-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 0q136 0 256 91L256 405L0 90Q119 0 256 0m21 277V149h-42v128zm-42-170h42V64h-42z"></svg:path>`,
})
export class ZmdiWifiInfoIcon {
  readonly viewBox = input("0 0 512 408")
  readonly width = input("1.26em")
  readonly height = input("1em")
}

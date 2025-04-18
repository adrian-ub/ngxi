import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsWifiOutlineIcon],svg[famicons-wifi-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M332.41 310.59a115 115 0 0 0-152.8 0m213.85-61.05a201.26 201.26 0 0 0-274.92 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M447.72 182.11a288 288 0 0 0-383.44 0"></svg:path><svg:path fill="currentColor" d="M256 416a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class FamiconsWifiOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

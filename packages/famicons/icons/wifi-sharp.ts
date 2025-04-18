import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsWifiSharpIcon],svg[famicons-wifi-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="42" d="M332.69 320a115 115 0 0 0-152.8 0m213.85-61a201.26 201.26 0 0 0-274.92 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="42" d="M448 191.52a288 288 0 0 0-383.44 0"></svg:path><svg:path fill="currentColor" d="M300.67 384L256 433l-44.34-49a56.73 56.73 0 0 1 88.92 0Z"></svg:path>`,
})
export class FamiconsWifiSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

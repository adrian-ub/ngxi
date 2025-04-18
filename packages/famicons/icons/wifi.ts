import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsWifiIcon],svg[famicons-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M346.65 304.3a136 136 0 0 0-180.71 0a21 21 0 1 0 27.91 31.38a94 94 0 0 1 124.89 0a21 21 0 0 0 27.91-31.4Z"></svg:path><svg:path fill="currentColor" d="M256.28 183.7a221.47 221.47 0 0 0-151.8 59.92a21 21 0 1 0 28.68 30.67a180.28 180.28 0 0 1 246.24 0a21 21 0 1 0 28.68-30.67a221.47 221.47 0 0 0-151.8-59.92"></svg:path><svg:path fill="currentColor" d="M462 175.86a309 309 0 0 0-411.44 0a21 21 0 1 0 28 31.29a267 267 0 0 1 355.43 0a21 21 0 0 0 28-31.31Z"></svg:path><svg:circle cx="256.28" cy="393.41" r="32" fill="currentColor"></svg:circle>`,
})
export class FamiconsWifiIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

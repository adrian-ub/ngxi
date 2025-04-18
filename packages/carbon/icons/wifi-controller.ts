import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonWifiControllerIcon],svg[carbon-wifi-controller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 30h20a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2m0-8h20v6H6Z"></svg:path><svg:circle cx="9" cy="25" r="1" fill="currentColor"></svg:circle><svg:circle cx="16" cy="14.5" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M10.783 10.333a7 7 0 0 1 10.434 0l-1.49 1.333a5 5 0 0 0-7.453 0Z"></svg:path><svg:path fill="currentColor" d="M7.2 7.4a11.002 11.002 0 0 1 17.6 0l-1.6 1.2a9 9 0 0 0-14.401 0Z"></svg:path>`,
})
export class CarbonWifiControllerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

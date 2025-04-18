import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiWifiAlt2Icon],svg[zmdi-wifi-alt-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M249 42Q142 41 59 97l43 53q49-29 107-38q108-15 187 38l42-53q-83-56-189-55m-.5-39Q387 3 497 88L249 397L0 88Q110 3 248.5 3"></svg:path>`,
})
export class ZmdiWifiAlt2Icon {
  readonly viewBox = input("0 0 504 400")
  readonly width = input("1.26em")
  readonly height = input("1em")
}

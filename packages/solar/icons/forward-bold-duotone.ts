import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarForwardBoldDuotoneIcon],svg[solar-forward-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.97 6.47a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06L18.44 12l-4.47-4.47a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M17.69 11.25H9.5c-.953 0-2.367.28-3.563 1.141c-1.235.89-2.187 2.365-2.187 4.609a.75.75 0 0 0 1.5 0c0-1.756.715-2.78 1.563-3.391c.887-.639 1.974-.859 2.687-.859h8.19l.75-.75zm2.503.463" opacity=".5"></svg:path>`,
})
export class SolarForwardBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

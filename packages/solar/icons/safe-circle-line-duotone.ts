import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSafeCircleLineDuotoneIcon],svg[solar-safe-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12Z"></svg:path><svg:path stroke-linecap="round" d="M7 8v8" opacity=".5"></svg:path><svg:path d="M12 12a2 2 0 1 1 4 0a2 2 0 0 1-4 0Z"></svg:path><svg:path stroke-linecap="round" d="m16 10l1-1m-6 6l1-1m0-4l-1-1m6 6l-1-1" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSafeCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

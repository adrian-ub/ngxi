import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarUsbLineDuotoneIcon],svg[solar-usb-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="20" r="2"></svg:circle><svg:circle cx="6" cy="6" r="1"></svg:circle><svg:path stroke-linecap="round" d="M12 2v13m0 0v3v-.558a2 2 0 0 1 1.367-1.898l3.265-1.088A2 2 0 0 0 18 12.559V10m-6 5v-.559a2 2 0 0 0-1.367-1.897l-3.265-1.088A2 2 0 0 1 6 9.558V7" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m14 5l-2-3l-2 3"></svg:path><svg:path d="M17 9c0-.471 0-.707.146-.854C17.293 8 17.53 8 18 8s.707 0 .854.146C19 8.293 19 8.53 19 9s0 .707-.146.854C18.707 10 18.47 10 18 10s-.707 0-.854-.146C17 9.707 17 9.47 17 9Z"></svg:path></svg:g>`,
})
export class SolarUsbLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

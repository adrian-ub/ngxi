import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarWaterdropLineDuotoneIcon],svg[solar-waterdrop-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 13.193C3 18.057 6.855 22 11.612 22h.777C17.145 22 21 18.057 21 13.193v-.265c0-4.611-2.729-8.765-6.903-10.507a5.43 5.43 0 0 0-4.194 0C5.73 4.163 3 8.317 3 12.928z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M7.615 10.724c.634-2.006 2.016-3.636 3.77-4.448"></svg:path></svg:g>`,
})
export class SolarWaterdropLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

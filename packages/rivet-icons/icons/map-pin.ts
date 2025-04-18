import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsMapPinIcon],svg[rivet-icons-map-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 6.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path d="M7.193 15.162a18 18 0 0 1-2.666-2.283C3.1 11.386 1.5 9.145 1.5 6.5C1.5 3.245 4.141 0 8 0s6.5 3.245 6.5 6.5c0 2.645-1.6 4.886-3.027 6.379a18 18 0 0 1-2.666 2.283c-.263.183-.536.351-.807.523c-.27-.172-.544-.34-.807-.523M8 2C5.359 2 3.5 4.232 3.5 6.5c0 1.855 1.15 3.614 2.473 4.996A16 16 0 0 0 8 13.28a16 16 0 0 0 2.027-1.783C11.35 10.114 12.5 8.356 12.5 6.5C12.5 4.232 10.641 2 8 2"></svg:path></svg:g>`,
})
export class RivetIconsMapPinIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

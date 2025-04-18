import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarWheelAngleBoldIcon],svg[solar-wheel-angle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 12c0 5.523-2.072 10-4.629 10H8.657c.867-.561 1.656-1.55 2.2-2.724c.873-1.888 1.4-4.46 1.4-7.276s-.527-5.388-1.4-7.276C10.312 3.549 9.523 2.56 8.656 2h7.714C18.928 2 21 6.477 21 12"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4.31 5.134C3.51 6.866 3 9.293 3 12s.509 5.134 1.31 6.866c.824 1.778 1.855 2.634 2.804 2.634c.95 0 1.981-.856 2.804-2.634c.802-1.732 1.31-4.158 1.31-6.866s-.508-5.134-1.31-6.866C9.095 3.356 8.064 2.5 7.114 2.5s-1.98.856-2.804 2.634M5.571 12c0 3.314.691 6 1.543 6c.787 0 1.436-2.29 1.531-5.25H7.63a.76.76 0 0 1-.772-.75a.76.76 0 0 1 .772-.75h1.016C8.55 8.29 7.901 6 7.115 6C6.261 6 5.57 8.686 5.57 12" clip-rule="evenodd"></svg:path>`,
})
export class SolarWheelAngleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

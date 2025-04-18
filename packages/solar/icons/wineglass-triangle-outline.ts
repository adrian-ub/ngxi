import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarWineglassTriangleOutlineIcon],svg[solar-wineglass-triangle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.948 6.388C1.43 4.837 2.545 2.25 4.7 2.25h14.598c2.156 0 3.27 2.587 1.753 4.138l-8.302 8.49v5.372h3.494a.75.75 0 0 1 0 1.5H7.756a.75.75 0 0 1 0-1.5h3.494v-5.373zM12 13.498l2.933-2.998H9.067zM7.6 9h8.8l3.58-3.66c.575-.589.165-1.59-.68-1.59H4.7c-.845 0-1.255 1.001-.68 1.59z" clip-rule="evenodd"></svg:path>`,
})
export class SolarWineglassTriangleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

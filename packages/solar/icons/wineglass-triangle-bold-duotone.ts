import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarWineglassTriangleBoldDuotoneIcon],svg[solar-wineglass-triangle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.3 3H4.7C3.2 3 2.439 4.794 3.485 5.864l7.801 7.976a1 1 0 0 0 1.43 0l7.801-7.976C21.562 4.794 20.8 3 19.3 3" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M7.006 21a.75.75 0 0 1 .75-.75h8.488a.75.75 0 0 1 0 1.5H7.756a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M11.285 13.84a1 1 0 0 0 1.43 0L16.471 10H7.53z"></svg:path><svg:path fill="currentColor" d="M11.285 13.84a1 1 0 0 0 1.43 0l.035-.035v6.445h-1.5v-6.446z" opacity=".5"></svg:path>`,
})
export class SolarWineglassTriangleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

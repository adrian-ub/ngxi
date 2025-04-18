import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarWineglassTriangleLineDuotoneIcon],svg[solar-wineglass-triangle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M16.244 21H7.756M4.701 3h14.598c1.5 0 2.263 1.794 1.217 2.864l-7.801 7.976a1 1 0 0 1-1.43 0L3.484 5.864C2.438 4.794 3.2 3 4.7 3Z"></svg:path><svg:path d="M12 14.571V21M7.473 9.75h9.054" opacity=".5"></svg:path></svg:g>`,
})
export class SolarWineglassTriangleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

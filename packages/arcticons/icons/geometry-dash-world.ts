import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGeometryDashWorldIcon],svg[arcticons-geometry-dash-world-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.785 21.622L26.38 5.028l16.594 16.594L26.38 38.215z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m20.793 27.22l11.214-11.213l2.69 2.69l-11.214 11.214zm-3.829-6.854l2.776-2.776l2.776 2.776l-2.776 2.776zm5.413-5.41l2.776-2.776l2.776 2.776l-2.776 2.776z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 2.5C12.145 2.5 2.5 12.145 2.5 24S12.145 45.5 24 45.5S45.5 35.853 45.5 24S35.855 2.5 24 2.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.732 31.175c-2.031 5.69 3.73 18.774 16.263 5.989"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.958 37.164h4.037v4.037"></svg:path>`,
})
export class ArcticonsGeometryDashWorldIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAircareIcon],svg[arcticons-aircare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="24.069" cy="31.163" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="9.927" ry="9.603"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.787 33.1h3.697c4.408 0 7.963-3.578 7.963-7.962a7.91 7.91 0 0 0-6.849-7.868a11.94 11.94 0 0 0-11.754-9.811a11.85 11.85 0 0 0-9.456 4.692a7.4 7.4 0 0 0-2.63-.474a7.687 7.687 0 0 0-7.702 7.702c0 .166 0 .355.023.521a6.852 6.852 0 0 0 2.512 13.224h4.764"></svg:path><svg:circle cx="24.069" cy="35.933" r=".825" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.069 25.878v7.086"></svg:path>`,
})
export class ArcticonsAircareIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

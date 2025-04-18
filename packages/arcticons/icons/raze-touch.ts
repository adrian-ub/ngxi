import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRazeTouchIcon],svg[arcticons-raze-touch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.5 38.32l3.723-21.492l8.751-7.3H43.5L41.087 22.13l-6.937 5.837h1.121l1.55 4.215h2.634l-1.133 6.29H27.944l-3.121-8.89h-4.438l1.081-6.437h6.421l2.76-2.763l.577-4.56H21.04L19.187 17.6L15.44 38.32z"></svg:path>`,
})
export class ArcticonsRazeTouchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

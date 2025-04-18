import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gisLocationArrowIcon],svg[gis-location-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M87.13 0a2.4 2.4 0 0 0-.64.088a2.4 2.4 0 0 0-.883.463L11.34 62.373a2.386 2.386 0 0 0 1.619 4.219l37.959-1.479l17.697 33.614a2.386 2.386 0 0 0 4.465-.707L89.486 2.79A2.386 2.386 0 0 0 87.131 0" color="currentColor"></svg:path>`,
})
export class GisLocationArrowIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}

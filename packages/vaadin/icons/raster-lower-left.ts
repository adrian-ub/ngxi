import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinRasterLowerLeftIcon],svg[vaadin-raster-lower-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 7h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1h-1zM9 7h1v1H9zm5-1h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1h-1zm5-1h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1h-1zm3-1h1v1h-1zm-2 0h1v1h-1zm3-1h1v1h-1zm-2 0h1v1h-1zm1-1h1v1h-1zm1-1h1v1h-1zM7 15h1v1H7zm-2 0h1v1H5zm-2 0h1v1H3zm-2 0h1v1H1zm5-1h1v1H6zm-2 0h1v1H4zm-2 0h1v1H2zm5-1h1v1H7zm-2 0h1v1H5zm-2 0h1v1H3zm3-1h1v1H6zm-2 0h1v1H4zm3-1h1v1H7zm-2 0h1v1H5zm1-1h1v1H6zm1-1h1v1H7zm8 6h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1H9zm5-1h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1H8zm7-1h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1H9zm5-1h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1H8zm7-1h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1H9zm5-1h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1H8zm7-1h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1h-1zM9 9h1v1H9zm5-1h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1h-1zM8 8h1v1H8z"></svg:path>`,
})
export class VaadinRasterLowerLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

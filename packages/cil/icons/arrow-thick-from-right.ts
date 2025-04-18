import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilArrowThickFromRightIcon],svg[cil-arrow-thick-from-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M254.625 56h-38.632L16 256.2L216 456h38.623V336h144V176h-144Zm112 152v96h-144v113.384l-161.37-161.21l161.37-161.535V208Zm96-152h32v400h-32z"></svg:path>`,
})
export class CilArrowThickFromRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixLibraryIcon],svg[ix-library-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 384h426.667v42.666H42.667zM85.334 85.333h64v277.333h-64zm85.333 21.333h64v256h-64zm160.934 15.62l63.027-11.114l47.949 251.494l-69.268.37zm-75.6-15.62h64v256h-64z"></svg:path>`,
})
export class IxLibraryIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

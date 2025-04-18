import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilChevronCircleUpAltIcon],svg[cil-chevron-circle-up-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 496A240 240 0 0 1 86.294 86.294a240 240 0 0 1 339.412 339.412A238.43 238.43 0 0 1 256 496m0-448C141.309 48 48 141.309 48 256s93.309 208 208 208s208-93.309 208-208S370.691 48 256 48"></svg:path><svg:path fill="currentColor" d="M356.686 315.313L256 214.628L155.314 315.313l-22.628-22.626L256 169.373l123.314 123.314z"></svg:path>`,
})
export class CilChevronCircleUpAltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

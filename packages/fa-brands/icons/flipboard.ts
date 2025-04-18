import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faBrandsFlipboardIcon],svg[fa-brands-flipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 32v448h448V32zm358.4 179.2h-89.6v89.6h-89.6v89.6H89.6V121.6h268.8z"></svg:path>`,
})
export class FaBrandsFlipboardIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

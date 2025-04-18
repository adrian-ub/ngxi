import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixDiamondIcon],svg[ix-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M384 85.333L469.334 192L256 480L42.667 192L128 85.333zm-78.77 122.666h-98.46l49.23 192zm-134.86 0h-63.164l119.767 179.796zm234.402 0h-63.143l-56.567 179.683zm-193.216-80H148.48l-38.409 48h66.818zm55.111 0h-21.334l-31.999 48h85.332zm96.832 0h-63.055l34.666 48h66.798z"></svg:path>`,
})
export class IxDiamondIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

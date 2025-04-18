import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilHamburgerMenuIcon],svg[cil-hamburger-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 96h352v32H80zm0 144h352v32H80zm0 144h352v32H80z"></svg:path>`,
})
export class CilHamburgerMenuIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

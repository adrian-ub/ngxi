import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoAngleDobuleDownIcon],svg[fontisto-angle-dobule-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.613 13.935L0 2.344L2.352 0l9.261 9.239L20.874 0l2.352 2.344zm0 10.065L0 12.409l2.352-2.344l9.261 9.239l9.261-9.239l2.352 2.344z"></svg:path>`,
})
export class FontistoAngleDobuleDownIcon {
  readonly viewBox = input("0 0 23 24")
  readonly width = input("0.96em")
  readonly height = input("1em")
}

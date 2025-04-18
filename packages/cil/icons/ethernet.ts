import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilEthernetIcon],svg[cil-ethernet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m385.128 118.178l-25.26 19.644l91.864 118.122l-91.919 118.236l25.263 19.64l107.192-137.88zm-265.314-.001L12.621 255.993l107.138 137.826l25.263-19.638l-91.866-118.182l91.918-118.176zM160 240h32v32h-32zm80 0h32v32h-32zm80 0h32v32h-32z"></svg:path>`,
})
export class CilEthernetIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilSwapHorizontalIcon],svg[cil-swap-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m364.118 67.313l69.255 69.255H160v32h273.373l-69.255 69.255l22.627 22.627l107.883-107.882L386.745 44.687zM147.882 267.882l-22.627-22.627L17.373 353.137L125.255 461.02l22.627-22.627l-69.255-69.256H352v-32H78.627z"></svg:path>`,
})
export class CilSwapHorizontalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

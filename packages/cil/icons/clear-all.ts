import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilClearAllIcon],svg[cil-clear-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 112h336v32H160zM88 240h336v32H88zM16 368h336v32H16z"></svg:path>`,
})
export class CilClearAllIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

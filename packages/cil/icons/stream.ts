import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilStreamIcon],svg[cil-stream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 112h336v32H16zm144 128h336v32H160zM16 368h336v32H16z"></svg:path>`,
})
export class CilStreamIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

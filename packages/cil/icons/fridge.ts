import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilFridgeIcon],svg[cil-fridge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M376 16H136a48.054 48.054 0 0 0-48 48v400a32.036 32.036 0 0 0 32 32h272a32.036 32.036 0 0 0 32-32V64a48.054 48.054 0 0 0-48-48m16 448H120V240h272Zm0-256H120V64a16.02 16.02 0 0 1 16-16h240a16.02 16.02 0 0 1 16 16Z"></svg:path><svg:path fill="currentColor" d="M144 280h32v96h-32zm0-176h32v64h-32z"></svg:path>`,
})
export class CilFridgeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

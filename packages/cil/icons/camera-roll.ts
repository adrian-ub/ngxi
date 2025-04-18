import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilCameraRollIcon],svg[cil-camera-roll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M328 104a32.036 32.036 0 0 0-32-32h-16V48a32.036 32.036 0 0 0-32-32H96a32.036 32.036 0 0 0-32 32v24H48a32.036 32.036 0 0 0-32 32v360a32.036 32.036 0 0 0 32 32h248a32.036 32.036 0 0 0 32-32v-24h168V136H328Zm136 64v240H296v56H48V104h48V48h152v56h48v64Z"></svg:path><svg:path fill="currentColor" d="M392 200h40v40h-40zm-72 0h40v40h-40zm-72 0h40v40h-40zm144 136h40v40h-40zm-72 0h40v40h-40zm-72 0h40v40h-40zm-72-136h40v40h-40zm0 136h40v40h-40z"></svg:path>`,
})
export class CilCameraRollIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilSimIcon],svg[cil-sim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 40H230.627A31.8 31.8 0 0 0 208 49.373L97.373 160A31.8 31.8 0 0 0 88 182.627V448a32.036 32.036 0 0 0 32 32h264a32.036 32.036 0 0 0 32-32V72a32.036 32.036 0 0 0-32-32m0 408H120V182.627L230.627 72H384Z"></svg:path><svg:path fill="currentColor" d="M208 416h144V216H208Zm32-168h80v136h-80Z"></svg:path>`,
})
export class CilSimIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

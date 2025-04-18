import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilCastIcon],svg[cil-cast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 360v64h64a64 64 0 0 0-64-64M472 80H40a24.03 24.03 0 0 0-24 24v72h32v-64h416v280H264v32h208a24.03 24.03 0 0 0 24-24V104a24.03 24.03 0 0 0-24-24"></svg:path><svg:path fill="currentColor" d="M16 216v32c97.047 0 176 78.953 176 176h32c0-114.691-93.309-208-208-208"></svg:path><svg:path fill="currentColor" d="M16 288v32a104.12 104.12 0 0 1 104 104h32c0-74.991-61.009-136-136-136"></svg:path>`,
})
export class CilCastIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

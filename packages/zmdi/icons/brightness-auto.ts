import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiBrightnessAutoIcon],svg[zmdi-brightness-auto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m217 262l24-78l25 78zm195-85l71 71l-71 71v100H312l-71 70l-70-70H71V319L0 248l71-71V77h100l70-70l71 70h100zM290 333h41l-68-192h-43l-68 192h40l15-42h68z"></svg:path>`,
})
export class ZmdiBrightnessAutoIcon {
  readonly viewBox = input("0 0 488 496")
  readonly width = input("0.99em")
  readonly height = input("1em")
}

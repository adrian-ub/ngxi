import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiBrightness6Icon],svg[zmdi-brightness-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M412 319v100H312l-71 70l-70-70H71V319L0 248l71-71V77h100l70-70l71 70h100v100l71 71zm-171 57q53 0 90.5-37.5T369 248t-37.5-90.5T241 120z"></svg:path>`,
})
export class ZmdiBrightness6Icon {
  readonly viewBox = input("0 0 488 496")
  readonly width = input("0.99em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiBrightness4Icon],svg[zmdi-brightness-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m412 177l71 71l-71 71v100H312l-71 70l-70-70H71V319L0 248l71-71V77h100l70-70l71 70h100zM241 376q53 0 90.5-37.5T369 248t-37.5-90.5T241 120q-28 0-53 12q33 15 54 46.5t21 69.5t-21 69.5t-54 46.5q25 12 53 12"></svg:path>`,
})
export class ZmdiBrightness4Icon {
  readonly viewBox = input("0 0 488 496")
  readonly width = input("0.99em")
  readonly height = input("1em")
}

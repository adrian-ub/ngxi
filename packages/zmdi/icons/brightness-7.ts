import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiBrightness7Icon],svg[zmdi-brightness-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m412 177l71 71l-71 71v100H312l-71 70l-70-70H71V319L0 248l71-71V77h100l70-70l71 70h100zM241 376q53 0 90.5-37.5T369 248t-37.5-90.5T241 120t-90.5 37.5T113 248t37.5 90.5T241 376m.5-213q35.5 0 60.5 25t25 60t-25 60t-60.5 25t-60.5-25t-25-60t25-60t60.5-25"></svg:path>`,
})
export class ZmdiBrightness7Icon {
  readonly viewBox = input("0 0 488 496")
  readonly width = input("0.99em")
  readonly height = input("1em")
}

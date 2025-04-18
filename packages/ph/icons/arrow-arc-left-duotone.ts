import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowArcLeftDuotoneIcon],svg[ph-arrow-arc-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M88 152H24V88Z" opacity=".2"></svg:path><svg:path d="M201.54 110.46a104 104 0 0 0-145.4-1.63L29.66 82.34A8 8 0 0 0 16 88v64a8 8 0 0 0 8 8h64a8 8 0 0 0 5.66-13.66l-26.19-26.18A88 88 0 0 1 216 184a8 8 0 0 0 16 0a103.33 103.33 0 0 0-30.46-73.54M32 144v-36.69L68.69 144Z"></svg:path></svg:g>`,
})
export class PhArrowArcLeftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

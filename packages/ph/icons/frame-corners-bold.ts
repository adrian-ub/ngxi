import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFrameCornersBoldIcon],svg[ph-frame-corners-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140 88a12 12 0 0 1 12-12h32a12 12 0 0 1 12 12v32a12 12 0 0 1-24 0v-20h-20a12 12 0 0 1-12-12m-68 92h32a12 12 0 0 0 0-24H84v-20a12 12 0 0 0-24 0v32a12 12 0 0 0 12 12M236 56v144a20 20 0 0 1-20 20H40a20 20 0 0 1-20-20V56a20 20 0 0 1 20-20h176a20 20 0 0 1 20 20m-24 4H44v136h168Z"></svg:path>`,
})
export class PhFrameCornersBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSlidersBoldIcon],svg[ph-sliders-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M68 102.06V40a12 12 0 0 0-24 0v62.06a36 36 0 0 0 0 67.88V216a12 12 0 0 0 24 0v-46.06a36 36 0 0 0 0-67.88M56 148a12 12 0 1 1 12-12a12 12 0 0 1-12 12m108-60a36.07 36.07 0 0 0-24-33.94V40a12 12 0 0 0-24 0v14.06a36 36 0 0 0 0 67.88V216a12 12 0 0 0 24 0v-94.06A36.07 36.07 0 0 0 164 88m-36 12a12 12 0 1 1 12-12a12 12 0 0 1-12 12m108 68a36.07 36.07 0 0 0-24-33.94V40a12 12 0 0 0-24 0v94.06a36 36 0 0 0 0 67.88V216a12 12 0 0 0 24 0v-14.06A36.07 36.07 0 0 0 236 168m-36 12a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhSlidersBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

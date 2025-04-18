import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phChalkboardSimpleDuotoneIcon],svg[ph-chalkboard-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 56v112h-64v32H32V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M240 192h-8v-24a8 8 0 0 0-8-8h-64a8 8 0 0 0-8 8v24H40V56h176v80a8 8 0 0 0 16 0V56a16 16 0 0 0-16-16H40a16 16 0 0 0-16 16v136h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16m-72-16h48v16h-48Z"></svg:path></svg:g>`,
})
export class PhChalkboardSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

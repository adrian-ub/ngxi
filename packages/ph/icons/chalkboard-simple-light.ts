import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phChalkboardSimpleLightIcon],svg[ph-chalkboard-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 194h-10v-26a6 6 0 0 0-6-6h-64a6 6 0 0 0-6 6v26H38V56a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2v80a6 6 0 0 0 12 0V56a14 14 0 0 0-14-14H40a14 14 0 0 0-14 14v138H16a6 6 0 0 0 0 12h224a6 6 0 0 0 0-12m-74-20h52v20h-52Z"></svg:path>`,
})
export class PhChalkboardSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

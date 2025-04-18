import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTagChevronLightIcon],svg[ph-tag-chevron-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m245 124.67l-45.63-68.44A14 14 0 0 0 187.72 50H32a6 6 0 0 0-5 9.33L72.79 128L27 196.67a6 6 0 0 0 5 9.33h155.72a14 14 0 0 0 11.65-6.23L245 131.33a6 6 0 0 0 0-6.66m-55.61 68.44a2 2 0 0 1-1.66.89H43.21L85 131.33a6 6 0 0 0 0-6.66L43.21 62h144.51a2 2 0 0 1 1.66.89L232.79 128Z"></svg:path>`,
})
export class PhTagChevronLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

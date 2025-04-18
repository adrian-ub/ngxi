import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phListPlusLightIcon],svg[ph-list-plus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M34 64a6 6 0 0 1 6-6h176a6 6 0 0 1 0 12H40a6 6 0 0 1-6-6m6 70h176a6 6 0 0 0 0-12H40a6 6 0 0 0 0 12m104 52H40a6 6 0 0 0 0 12h104a6 6 0 0 0 0-12m88 0h-18v-18a6 6 0 0 0-12 0v18h-18a6 6 0 0 0 0 12h18v18a6 6 0 0 0 12 0v-18h18a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhListPlusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

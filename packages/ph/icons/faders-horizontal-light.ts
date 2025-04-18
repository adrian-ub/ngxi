import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFadersHorizontalLightIcon],svg[ph-faders-horizontal-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M178 80a6 6 0 0 1 6-6h32a6 6 0 0 1 0 12h-32a6 6 0 0 1-6-6M40 86h106v18a6 6 0 0 0 12 0V56a6 6 0 0 0-12 0v18H40a6 6 0 0 0 0 12m176 84h-96a6 6 0 0 0 0 12h96a6 6 0 0 0 0-12M88 146a6 6 0 0 0-6 6v18H40a6 6 0 0 0 0 12h42v18a6 6 0 0 0 12 0v-48a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhFadersHorizontalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

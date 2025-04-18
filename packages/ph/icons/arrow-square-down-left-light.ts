import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareDownLeftLightIcon],svg[ph-arrow-square-down-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2ZM164.24 91.76a6 6 0 0 1 0 8.48L110.48 154H144a6 6 0 0 1 0 12H96a6 6 0 0 1-6-6v-48a6 6 0 0 1 12 0v33.52l53.76-53.76a6 6 0 0 1 8.48 0"></svg:path>`,
})
export class PhArrowSquareDownLeftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSquareSplitHorizontalLightIcon],svg[ph-square-split-horizontal-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 42H56a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14M54 200V56a2 2 0 0 1 2-2h66v148H56a2 2 0 0 1-2-2m148 0a2 2 0 0 1-2 2h-66V54h66a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhSquareSplitHorizontalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

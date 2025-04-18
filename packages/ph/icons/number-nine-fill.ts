import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNumberNineFillIcon],svg[ph-number-nine-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m-33.7 105.62L132.62 188a8 8 0 0 1-13.86-8l16.52-28.61a45 45 0 0 1-7.28.61a44.05 44.05 0 1 1 38.3-22.38M156 108a28 28 0 1 1-28-28a28 28 0 0 1 28 28"></svg:path>`,
})
export class PhNumberNineFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

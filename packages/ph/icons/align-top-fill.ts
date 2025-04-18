import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phAlignTopFillIcon],svg[ph-align-top-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 40a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8m-32 24h-40a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h40a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16m-88 0H64a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16h40a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhAlignTopFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

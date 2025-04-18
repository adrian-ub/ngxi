import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSquareSplitVerticalFillIcon],svg[ph-square-split-vertical-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 56v60a4 4 0 0 1-4 4H44a4 4 0 0 1-4-4V56a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16m-4 80H44a4 4 0 0 0-4 4v60a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-60a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhSquareSplitVerticalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

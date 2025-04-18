import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSquareSplitHorizontalFillIcon],svg[ph-square-split-horizontal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 44v168a4 4 0 0 1-4 4H56a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h60a4 4 0 0 1 4 4m80-4h-60a4 4 0 0 0-4 4v168a4 4 0 0 0 4 4h60a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhSquareSplitHorizontalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

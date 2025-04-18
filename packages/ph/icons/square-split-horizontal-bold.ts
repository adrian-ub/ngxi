import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSquareSplitHorizontalBoldIcon],svg[ph-square-split-horizontal-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 36H56a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20M60 60h56v136H60Zm136 136h-56V60h56Z"></svg:path>`,
})
export class PhSquareSplitHorizontalBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

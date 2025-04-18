import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSquareSplitHorizontalThinIcon],svg[ph-square-split-horizontal-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 44H56a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12M52 200V56a4 4 0 0 1 4-4h68v152H56a4 4 0 0 1-4-4m152 0a4 4 0 0 1-4 4h-68V52h68a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhSquareSplitHorizontalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

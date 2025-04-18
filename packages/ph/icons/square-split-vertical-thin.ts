import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSquareSplitVerticalThinIcon],svg[ph-square-split-vertical-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 44H56a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12M56 52h144a4 4 0 0 1 4 4v68H52V56a4 4 0 0 1 4-4m144 152H56a4 4 0 0 1-4-4v-68h152v68a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhSquareSplitVerticalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

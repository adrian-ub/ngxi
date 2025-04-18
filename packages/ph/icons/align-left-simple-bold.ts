import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phAlignLeftSimpleBoldIcon],svg[ph-align-left-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44 56v144a12 12 0 0 1-24 0V56a12 12 0 0 1 24 0m200 40v64a20 20 0 0 1-20 20H80a20 20 0 0 1-20-20V96a20 20 0 0 1 20-20h144a20 20 0 0 1 20 20m-24 4H84v56h136Z"></svg:path>`,
})
export class PhAlignLeftSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

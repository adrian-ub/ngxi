import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phAlignBottomSimpleFillIcon],svg[ph-align-bottom-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 232a8 8 0 0 1-8 8H56a8 8 0 0 1 0-16h144a8 8 0 0 1 8 8M96 208h64a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16H96a16 16 0 0 0-16 16v152a16 16 0 0 0 16 16"></svg:path>`,
})
export class PhAlignBottomSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phAlignBottomSimpleThinIcon],svg[ph-align-bottom-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 232a4 4 0 0 1-4 4H56a4 4 0 0 1 0-8h144a4 4 0 0 1 4 4M84 192V40a12 12 0 0 1 12-12h64a12 12 0 0 1 12 12v152a12 12 0 0 1-12 12H96a12 12 0 0 1-12-12m8 0a4 4 0 0 0 4 4h64a4 4 0 0 0 4-4V40a4 4 0 0 0-4-4H96a4 4 0 0 0-4 4Z"></svg:path>`,
})
export class PhAlignBottomSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phAlignBottomSimpleLightIcon],svg[ph-align-bottom-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M206 232a6 6 0 0 1-6 6H56a6 6 0 0 1 0-12h144a6 6 0 0 1 6 6M82 192V40a14 14 0 0 1 14-14h64a14 14 0 0 1 14 14v152a14 14 0 0 1-14 14H96a14 14 0 0 1-14-14m12 0a2 2 0 0 0 2 2h64a2 2 0 0 0 2-2V40a2 2 0 0 0-2-2H96a2 2 0 0 0-2 2Z"></svg:path>`,
})
export class PhAlignBottomSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

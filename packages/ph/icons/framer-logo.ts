import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFramerLogoIcon],svg[ph-framer-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 104V40a8 8 0 0 0-8-8H56a8 8 0 0 0-5.31 14L107 96H56a8 8 0 0 0-8 8v64a8 8 0 0 0 2.34 5.66l72 72A8 8 0 0 0 136 240v-64h64a8 8 0 0 0 5.31-14L149 112h51a8 8 0 0 0 8-8m-29 56h-51a8 8 0 0 0-8 8v52.69l-56-56V112h61Zm13-64h-61L77 48h115Z"></svg:path>`,
})
export class PhFramerLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

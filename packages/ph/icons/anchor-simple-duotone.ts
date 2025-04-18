import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phAnchorSimpleDuotoneIcon],svg[ph-anchor-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M152 64a24 24 0 1 1-24-24a24 24 0 0 1 24 24" opacity=".2"></svg:path><svg:path d="M224 112h-24a8 8 0 0 0 0 16h15.64A88.15 88.15 0 0 1 136 207.63V95a32 32 0 1 0-16 0v112.63A88.15 88.15 0 0 1 40.36 128H56a8 8 0 0 0 0-16H32a8 8 0 0 0-8 8a104 104 0 0 0 208 0a8 8 0 0 0-8-8M112 64a16 16 0 1 1 16 16a16 16 0 0 1-16-16"></svg:path></svg:g>`,
})
export class PhAnchorSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phAnchorSimpleBoldIcon],svg[ph-anchor-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 108h-24a12 12 0 0 0 0 24h11.15A84.21 84.21 0 0 1 140 203.14V97.94a36 36 0 1 0-24 0v105.2A84.21 84.21 0 0 1 44.85 132H56a12 12 0 0 0 0-24H32a12 12 0 0 0-12 12a108 108 0 0 0 216 0a12 12 0 0 0-12-12m-96-56a12 12 0 1 1-12 12a12 12 0 0 1 12-12"></svg:path>`,
})
export class PhAnchorSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phAnchorSimpleThinIcon],svg[ph-anchor-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 116h-24a4 4 0 0 0 0 8h19.91A92.13 92.13 0 0 1 132 211.91V91.71a28 28 0 1 0-8 0v120.2A92.13 92.13 0 0 1 36.09 124H56a4 4 0 0 0 0-8H32a4 4 0 0 0-4 4a100 100 0 0 0 200 0a4 4 0 0 0-4-4M108 64a20 20 0 1 1 20 20a20 20 0 0 1-20-20"></svg:path>`,
})
export class PhAnchorSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

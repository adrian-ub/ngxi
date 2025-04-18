import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phAnchorSimpleLightIcon],svg[ph-anchor-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 114h-24a6 6 0 0 0 0 12h17.8a90.13 90.13 0 0 1-83.8 83.78V93.4a30 30 0 1 0-12 0v116.38A90.13 90.13 0 0 1 38.2 126H56a6 6 0 0 0 0-12H32a6 6 0 0 0-6 6a102 102 0 0 0 204 0a6 6 0 0 0-6-6M110 64a18 18 0 1 1 18 18a18 18 0 0 1-18-18"></svg:path>`,
})
export class PhAnchorSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

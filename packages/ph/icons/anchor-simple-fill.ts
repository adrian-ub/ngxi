import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phAnchorSimpleFillIcon],svg[ph-anchor-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 120a104 104 0 0 1-208 0a8 8 0 0 1 8-8h24a8 8 0 0 1 0 16H40.36A88.15 88.15 0 0 0 120 207.63V90.83a28 28 0 1 1 16 0v116.8A88.15 88.15 0 0 0 215.64 128H200a8 8 0 0 1 0-16h24a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhAnchorSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

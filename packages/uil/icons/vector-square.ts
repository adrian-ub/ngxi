import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilVectorSquareIcon],svg[uil-vector-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 16.18V7.82A3 3 0 1 0 16.18 4H7.82A3 3 0 1 0 4 7.82v8.36A3 3 0 1 0 7.82 20h8.36A3 3 0 1 0 20 16.18M19 4a1 1 0 1 1-1 1a1 1 0 0 1 1-1M5 4a1 1 0 1 1-1 1a1 1 0 0 1 1-1m0 16a1 1 0 1 1 1-1a1 1 0 0 1-1 1m11.18-2H7.82A3 3 0 0 0 6 16.18V7.82A3 3 0 0 0 7.82 6h8.36A3 3 0 0 0 18 7.82v8.36A3 3 0 0 0 16.18 18M19 20a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class UilVectorSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

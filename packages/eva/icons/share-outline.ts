import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaShareOutlineIcon],svg[eva-share-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 15a3 3 0 0 0-2.1.86L8 12.34v-.67l7.9-3.53A3 3 0 1 0 15 6v.34L7.1 9.86a3 3 0 1 0 0 4.28l7.9 3.53V18a3 3 0 1 0 3-3m0-10a1 1 0 1 1-1 1a1 1 0 0 1 1-1M5 13a1 1 0 1 1 1-1a1 1 0 0 1-1 1m13 6a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class EvaShareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

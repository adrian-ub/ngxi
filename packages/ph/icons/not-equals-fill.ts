import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNotEqualsFillIcon],svg[ph-not-equals-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-24 112a8 8 0 0 1 0 16h-73.37L78 197.27a8 8 0 0 1-12-10.54L89.37 160H72a8 8 0 0 1 0-16h31.37l28-32H72a8 8 0 0 1 0-16h73.37L178 58.73a8 8 0 1 1 12 10.54L166.63 96H184a8 8 0 0 1 0 16h-31.37l-28 32Z"></svg:path>`,
})
export class PhNotEqualsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

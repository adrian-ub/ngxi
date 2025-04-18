import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLessThanOrEqualFillIcon],svg[ph-less-than-or-equal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-32 152H72a8 8 0 0 1 0-16h104a8 8 0 0 1 0 16m2.35-55.65a8 8 0 0 1-4.7 15.3l-104-32a8 8 0 0 1 0-15.3l104-32a8 8 0 0 1 4.7 15.3L99.2 104Z"></svg:path>`,
})
export class PhLessThanOrEqualFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

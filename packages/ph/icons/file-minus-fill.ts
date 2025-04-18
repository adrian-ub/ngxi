import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFileMinusFillIcon],svg[ph-file-minus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M152 160h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16m0-72V43.31L196.69 88Z"></svg:path>`,
})
export class PhFileMinusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

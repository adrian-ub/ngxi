import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGreaterThanFillIcon],svg[ph-greater-than-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-20.65 103.26l-104 48a8 8 0 0 1-6.7-14.52L164.91 128L76.65 87.26a8 8 0 1 1 6.7-14.52l104 48a8 8 0 0 1 0 14.52"></svg:path>`,
})
export class PhGreaterThanFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

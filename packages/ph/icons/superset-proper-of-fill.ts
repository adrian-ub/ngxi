import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSupersetProperOfFillIcon],svg[ph-superset-proper-of-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-80 160H80a8 8 0 0 1 0-16h48a48 48 0 0 0 0-96H80a8 8 0 0 1 0-16h48a64 64 0 0 1 0 128"></svg:path>`,
})
export class PhSupersetProperOfFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

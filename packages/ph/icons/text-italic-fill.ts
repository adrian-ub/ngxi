import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTextItalicFillIcon],svg[ph-text-italic-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-32 48h-22.36l-34.29 96H136a8 8 0 0 1 0 16H80a8 8 0 0 1 0-16h22.36l34.29-96H120a8 8 0 0 1 0-16h56a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhTextItalicFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCropFillIcon],svg[ph-crop-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-88 48h48a8 8 0 0 1 8 8v48a8 8 0 0 1-16 0V96h-40a8 8 0 0 1 0-16m72 96h-16v16a8 8 0 0 1-16 0v-16H88a8 8 0 0 1-8-8V96H64a8 8 0 0 1 0-16h16V64a8 8 0 0 1 16 0v96h96a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhCropFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

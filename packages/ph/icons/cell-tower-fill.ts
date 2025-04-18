import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCellTowerFillIcon],svg[ph-cell-tower-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M135.16 84.42a8 8 0 0 0-14.32 0l-72 144a8 8 0 0 0 14.31 7.16L77 208h102.1l13.79 27.58A8 8 0 0 0 200 240a8 8 0 0 0 7.15-11.58ZM128 105.89L155.06 160h-54.12Zm31.49-12.15a32 32 0 1 0-63 0a8 8 0 1 1-15.74 2.85a48 48 0 1 1 94.46 0a8 8 0 0 1-7.86 6.58a9 9 0 0 1-1.43-.13a8 8 0 0 1-6.43-9.3m-95.34 42.47a80 80 0 1 1 127.7 0a8 8 0 0 1-12.76-9.65a64 64 0 1 0-102.18 0a8 8 0 0 1-12.76 9.65"></svg:path>`,
})
export class PhCellTowerFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

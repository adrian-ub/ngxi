import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCellTowerBoldIcon],svg[ph-cell-tower-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M138.67 86.51a12 12 0 0 0-21.34 0l-72 140a12 12 0 1 0 21.34 11l11-21.49h100.61l11.05 21.49a12 12 0 1 0 21.34-11ZM128 118.24L145.36 152h-34.72ZM90.07 192l8.22-16h59.42l8.22 16Zm84.44-123.27a12 12 0 1 1-21.45 10.75a28 28 0 0 0-50.37.52A12 12 0 1 1 81 69.7A52.28 52.28 0 0 1 128 40a51.74 51.74 0 0 1 46.51 28.73m-124.58 76a92 92 0 1 1 156.14 0A12 12 0 0 1 185.71 132a68 68 0 1 0-115.42 0a12 12 0 0 1-20.36 12.7Z"></svg:path>`,
})
export class PhCellTowerBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

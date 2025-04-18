import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsStarOutlineIcon],svg[gridicons-star-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 6.308l1.176 3.167l.347.936l.997.041l3.374.139l-2.647 2.092l-.784.62l.27.962l.911 3.249l-2.814-1.871l-.83-.553l-.83.552l-2.814 1.871l.911-3.249l.27-.962l-.784-.62l-2.648-2.092l3.374-.139l.997-.041l.347-.936zM12 2L9.418 8.953L2 9.257l5.822 4.602L5.82 21L12 16.891L18.18 21l-2.002-7.141L22 9.257l-7.418-.305z"></svg:path>`,
})
export class GridiconsStarOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

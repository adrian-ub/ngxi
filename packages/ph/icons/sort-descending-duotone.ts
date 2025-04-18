import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSortDescendingDuotoneIcon],svg[ph-sort-descending-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 88v88a16 16 0 0 1-16 16H48V64h152Z" opacity=".2"></svg:path><svg:path d="M40 128a8 8 0 0 1 8-8h72a8 8 0 0 1 0 16H48a8 8 0 0 1-8-8m8-56h56a8 8 0 0 0 0-16H48a8 8 0 0 0 0 16m136 112H48a8 8 0 0 0 0 16h136a8 8 0 0 0 0-16m45.66-101.66l-40-40a8 8 0 0 0-11.32 0l-40 40a8 8 0 0 0 11.32 11.32L176 67.31V144a8 8 0 0 0 16 0V67.31l26.34 26.35a8 8 0 0 0 11.32-11.32"></svg:path></svg:g>`,
})
export class PhSortDescendingDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

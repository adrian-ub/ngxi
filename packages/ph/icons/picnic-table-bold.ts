import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPicnicTableBoldIcon],svg[ph-picnic-table-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 124h-40.58l-24-48H192a12 12 0 0 0 0-24H64a12 12 0 0 0 0 24h12.58l-24 48H12a12 12 0 0 0 0 24h28.58l-19.31 38.63a12 12 0 1 0 21.46 10.73L67.42 148h121.16l24.69 49.36a12 12 0 1 0 21.46-10.73L215.42 148H244a12 12 0 0 0 0-24m-164.58 0l24-48h49.16l24 48Z"></svg:path>`,
})
export class PhPicnicTableBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

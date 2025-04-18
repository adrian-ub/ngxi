import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSortClockDescendingOutlineIcon],svg[mdi-sort-clock-descending-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 7h-3l4-4l4 4h-3v14h-2zM8 5c-3.86 0-7 3.13-7 7s3.13 7 7 7c3.86 0 7-3.13 7-7s-3.13-7-7-7m0 2.15c2.67 0 4.85 2.17 4.85 4.85S10.68 16.85 8 16.85S3.15 14.68 3.15 12S5.32 7.15 8 7.15M7 9v3.69l3.19 1.84l.75-1.3l-2.44-1.41V9"></svg:path>`,
})
export class MdiSortClockDescendingOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

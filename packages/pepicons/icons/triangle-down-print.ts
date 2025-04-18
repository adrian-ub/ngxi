import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsTriangleDownPrintIcon],svg[pepicons-triangle-down-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m12.076 16.265l-5-8A.5.5 0 0 1 7.5 7.5h10a.5.5 0 0 1 .424.765l-5 8a.5.5 0 0 1-.848 0Z" opacity=".8"></svg:path><svg:path fill-rule="evenodd" d="m4.576 7.265l5 8a.5.5 0 0 0 .848 0l5-8A.5.5 0 0 0 15 6.5H5a.5.5 0 0 0-.424.765Zm9.522.235L10 14.057L5.902 7.5h8.196Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsTriangleDownPrintIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

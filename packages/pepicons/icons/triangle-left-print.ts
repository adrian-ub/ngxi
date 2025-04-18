import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsTriangleLeftPrintIcon],svg[pepicons-triangle-left-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m7.735 10.576l8-5A.5.5 0 0 1 16.5 6v10a.5.5 0 0 1-.765.424l-8-5a.5.5 0 0 1 0-.848Z" opacity=".8"></svg:path><svg:path fill-rule="evenodd" d="m13.735 4.576l-8 5a.5.5 0 0 0 0 .848l8 5A.5.5 0 0 0 14.5 15V5a.5.5 0 0 0-.765-.424ZM13.5 5.902v8.196L6.943 10L13.5 5.902Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsTriangleLeftPrintIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsTriangleUpPrintIcon],svg[pepicons-triangle-up-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m12.924 6.735l5 8a.5.5 0 0 1-.424.765h-10a.5.5 0 0 1-.424-.765l5-8a.5.5 0 0 1 .848 0Z" opacity=".8"></svg:path><svg:path fill-rule="evenodd" d="m15.424 13.735l-5-8a.5.5 0 0 0-.848 0l-5 8A.5.5 0 0 0 5 14.5h10a.5.5 0 0 0 .424-.765ZM5.902 13.5L10 6.943l4.098 6.557H5.902Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsTriangleUpPrintIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

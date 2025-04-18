import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsMinusPrintIcon],svg[pepicons-minus-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6.5 12.5a1.5 1.5 0 0 1 0-3h10a1.5 1.5 0 0 1 0 3h-10Z" opacity=".8"></svg:path><svg:path d="M5 10.5a.5.5 0 0 1 0-1h10a.5.5 0 0 1 0 1H5Z"></svg:path></svg:g>`,
})
export class PepiconsMinusPrintIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

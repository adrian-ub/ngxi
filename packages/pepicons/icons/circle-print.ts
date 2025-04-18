import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsCirclePrintIcon],svg[pepicons-circle-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:circle cx="12" cy="11" r="6" opacity=".8"></svg:circle><svg:path fill-rule="evenodd" d="M4 10a6 6 0 1 0 12 0a6 6 0 0 0-12 0Zm11 0a5 5 0 1 1-10 0a5 5 0 0 1 10 0Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsCirclePrintIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

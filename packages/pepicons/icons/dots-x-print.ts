import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsDotsXPrintIcon],svg[pepicons-dots-x-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6.5 13a1.5 1.5 0 0 1 0-3h11a1.5 1.5 0 0 1 0 3h-11Z" opacity=".8"></svg:path><svg:path d="M14 10.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0Zm-5 0a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0Zm-5 0a1.249 1.249 0 1 1 2.5 0a1.25 1.25 0 1 1-2.5 0Z"></svg:path></svg:g>`,
})
export class PepiconsDotsXPrintIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsArrowLeftPrintIcon],svg[pepicons-arrow-left-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:g opacity=".8"><svg:path d="M11.294 15.652a1.5 1.5 0 0 1-2.113-.192l-3.333-4a1.5 1.5 0 1 1 2.304-1.92l3.334 4a1.5 1.5 0 0 1-.192 2.112Z"></svg:path><svg:path d="M11.294 5.348a1.5 1.5 0 0 1 .192 2.112l-3.334 4a1.5 1.5 0 0 1-2.304-1.92l3.333-4a1.5 1.5 0 0 1 2.113-.192Z"></svg:path><svg:path d="M7.5 10.5A1.5 1.5 0 0 1 9 9h8a1.5 1.5 0 0 1 0 3H9a1.5 1.5 0 0 1-1.5-1.5Z"></svg:path></svg:g><svg:path d="M8.653 14.384a.5.5 0 0 1-.704-.064l-3.333-4a.5.5 0 0 1 .768-.64l3.333 4a.5.5 0 0 1-.064.704Z"></svg:path><svg:path d="M8.653 5.616a.5.5 0 0 1 .064.704l-3.333 4a.5.5 0 0 1-.768-.64l3.333-4a.5.5 0 0 1 .704-.064Z"></svg:path><svg:path d="M5 10a.5.5 0 0 1 .5-.5H15a.5.5 0 0 1 0 1H5.5A.5.5 0 0 1 5 10Z"></svg:path></svg:g>`,
})
export class PepiconsArrowLeftPrintIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

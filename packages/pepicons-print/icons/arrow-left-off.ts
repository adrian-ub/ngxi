import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintArrowLeftOffIcon],svg[pepicons-print-arrow-left-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd" opacity=".2"><svg:path d="M11.294 15.652a1.5 1.5 0 0 1-2.113-.192l-3.333-4a1.5 1.5 0 1 1 2.304-1.92l3.334 4a1.5 1.5 0 0 1-.192 2.112"></svg:path><svg:path d="M11.294 5.348a1.5 1.5 0 0 1 .192 2.112l-3.334 4a1.5 1.5 0 0 1-2.304-1.92l3.333-4a1.5 1.5 0 0 1 2.113-.192"></svg:path><svg:path d="M7.5 10.5A1.5 1.5 0 0 1 9 9h8a1.5 1.5 0 0 1 0 3H9a1.5 1.5 0 0 1-1.5-1.5"></svg:path></svg:g><svg:path fill-rule="evenodd" d="M8.653 14.384a.5.5 0 0 1-.704-.064l-3.333-4a.5.5 0 0 1 .768-.64l3.333 4a.5.5 0 0 1-.064.704" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M8.653 5.616a.5.5 0 0 1 .064.704l-3.333 4a.5.5 0 0 1-.768-.64l3.333-4a.5.5 0 0 1 .704-.064" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M5 10a.5.5 0 0 1 .5-.5H15a.5.5 0 0 1 0 1H5.5A.5.5 0 0 1 5 10" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPrintArrowLeftOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

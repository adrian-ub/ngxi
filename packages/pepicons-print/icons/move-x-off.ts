import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintMoveXOffIcon],svg[pepicons-print-move-x-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:g opacity=".2"><svg:path d="M14.706 6.348a1.5 1.5 0 0 1 2.113.192l3.333 4a1.5 1.5 0 1 1-2.304 1.92l-3.334-4a1.5 1.5 0 0 1 .192-2.112"></svg:path><svg:path d="M14.706 16.652a1.5 1.5 0 0 1-.192-2.112l3.334-4a1.5 1.5 0 1 1 2.304 1.92l-3.333 4a1.5 1.5 0 0 1-2.113.192"></svg:path><svg:path d="M18.5 11.5A1.5 1.5 0 0 1 17 13H9a1.5 1.5 0 0 1 0-3h8a1.5 1.5 0 0 1 1.5 1.5"></svg:path><svg:path d="M9.294 16.652a1.5 1.5 0 0 1-2.113-.192l-3.333-4a1.5 1.5 0 1 1 2.304-1.92l3.334 4a1.5 1.5 0 0 1-.192 2.112"></svg:path><svg:path d="M9.294 6.348a1.5 1.5 0 0 1 .192 2.112l-3.334 4a1.5 1.5 0 0 1-2.304-1.92l3.333-4a1.5 1.5 0 0 1 2.113-.192"></svg:path><svg:path d="M5.5 11.5A1.5 1.5 0 0 1 7 10h8a1.5 1.5 0 0 1 0 3H7a1.5 1.5 0 0 1-1.5-1.5"></svg:path></svg:g><svg:path d="M13.347 5.616a.5.5 0 0 1 .704.064l3.333 4a.5.5 0 0 1-.768.64l-3.333-4a.5.5 0 0 1 .064-.704"></svg:path><svg:path d="M13.347 14.384a.5.5 0 0 1-.064-.704l3.333-4a.5.5 0 1 1 .768.64l-3.333 4a.5.5 0 0 1-.704.064"></svg:path><svg:path d="M3.5 9.5h13a.5.5 0 1 1 0 1h-13a.5.5 0 0 1 0-1"></svg:path><svg:path d="M6.653 14.384a.5.5 0 0 1-.704-.064l-3.333-4a.5.5 0 0 1 .768-.64l3.333 4a.5.5 0 0 1-.064.704"></svg:path><svg:path d="M6.653 5.616a.5.5 0 0 1 .064.704l-3.333 4a.5.5 0 0 1-.768-.64l3.333-4a.5.5 0 0 1 .704-.064M4.5 10a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5"></svg:path></svg:g><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPrintMoveXOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

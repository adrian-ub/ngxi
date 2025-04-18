import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintExclamationOffIcon],svg[pepicons-print-exclamation-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g opacity=".2"><svg:path fill-rule="evenodd" d="M11 3a2 2 0 0 1 2 2v7a2 2 0 1 1-4 0V5a2 2 0 0 1 2-2" clip-rule="evenodd"></svg:path><svg:path d="M13 17a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path></svg:g><svg:path fill-rule="evenodd" d="M10.25 2.25A.75.75 0 0 1 11 3v9a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path d="M11.5 16.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPrintExclamationOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

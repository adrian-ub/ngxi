import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintPauseOffIcon],svg[pepicons-print-pause-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g opacity=".2"><svg:path d="M7 7a2 2 0 1 1 4 0v8a2 2 0 1 1-4 0z"></svg:path><svg:path fill-rule="evenodd" d="M11.5 7v8a2.5 2.5 0 0 1-5 0V7a2.5 2.5 0 0 1 5 0M9 5a2 2 0 0 0-2 2v8a2 2 0 1 0 4 0V7a2 2 0 0 0-2-2" clip-rule="evenodd"></svg:path><svg:path d="M13 7a2 2 0 1 1 4 0v8a2 2 0 1 1-4 0z"></svg:path><svg:path fill-rule="evenodd" d="M17.5 7v8a2.5 2.5 0 0 1-5 0V7a2.5 2.5 0 0 1 5 0M15 5a2 2 0 0 0-2 2v8a2 2 0 1 0 4 0V7a2 2 0 0 0-2-2" clip-rule="evenodd"></svg:path></svg:g><svg:path fill-rule="evenodd" d="M8 14V6a1 1 0 0 0-2 0v8a1 1 0 1 0 2 0M7 4a2 2 0 0 0-2 2v8a2 2 0 1 0 4 0V6a2 2 0 0 0-2-2m7 10V6a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0M13 4a2 2 0 0 0-2 2v8a2 2 0 1 0 4 0V6a2 2 0 0 0-2-2" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPrintPauseOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

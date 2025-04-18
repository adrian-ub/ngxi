import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintDownLeftIcon],svg[pepicons-print-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:g opacity=".2"><svg:path d="M8.707 17.707a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 1.414L5.414 13l3.293 3.293a1 1 0 0 1 0 1.414"></svg:path><svg:path d="M13.75 12c.595 0 1.166-.238 1.588-.663A2.28 2.28 0 0 0 16 9.727V4a1 1 0 1 1 2 0v5.727a4.3 4.3 0 0 1-1.242 3.02A4.24 4.24 0 0 1 13.75 14H4a1 1 0 1 1 0-2z"></svg:path></svg:g><svg:path d="M7.354 16.354a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L3.707 12l3.647 3.646a.5.5 0 0 1 0 .708"></svg:path><svg:path d="M12.75 11.5c.728 0 1.427-.291 1.943-.81s.807-1.226.807-1.963V3a.5.5 0 0 1 1 0v5.727c0 1-.394 1.959-1.097 2.667A3.74 3.74 0 0 1 12.75 12.5H3a.5.5 0 0 1 0-1z"></svg:path></svg:g>`,
})
export class PepiconsPrintDownLeftIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

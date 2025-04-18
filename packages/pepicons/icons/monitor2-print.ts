import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsMonitor2PrintIcon],svg[pepicons-monitor2-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M2 4.5A1.5 1.5 0 0 1 3.5 3h15A1.5 1.5 0 0 1 20 4.5v10a1.5 1.5 0 0 1-1.5 1.5h-5v2.5a1 1 0 0 1-.031.25H15.5a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1h2.031a1.002 1.002 0 0 1-.031-.25V16h-5A1.5 1.5 0 0 1 2 14.5v-10Z" clip-rule="evenodd" opacity=".8"></svg:path><svg:path fill-rule="evenodd" d="M17.5 1.5h-15a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2v-10a2 2 0 0 0-2-2Zm-16 2a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1v-10Z" clip-rule="evenodd"></svg:path><svg:path d="M10 14a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5Z"></svg:path><svg:path fill-rule="evenodd" d="M11.5 14.5h-3a1 1 0 0 0-1 1V18a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-2.5a1 1 0 0 0-1-1Zm-3 3.5v-2.5h3V18h-3Z" clip-rule="evenodd"></svg:path><svg:path d="M5.5 19a.5.5 0 0 1 0-1h9a.5.5 0 0 1 0 1h-9Z"></svg:path><svg:path fill-rule="evenodd" d="M19 12H1v-1h18v1Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsMonitor2PrintIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintMonitorOffIcon],svg[pepicons-print-monitor-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M2 4.5A1.5 1.5 0 0 1 3.5 3h15A1.5 1.5 0 0 1 20 4.5v10a1.5 1.5 0 0 1-1.5 1.5h-5v2.5a1 1 0 0 1-.031.25H15.5a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1h2.031a1 1 0 0 1-.031-.25V16h-5A1.5 1.5 0 0 1 2 14.5z" clip-rule="evenodd" opacity=".2"></svg:path><svg:path fill-rule="evenodd" d="M17.5 1.5h-15a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2v-10a2 2 0 0 0-2-2m-16 2a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1z" clip-rule="evenodd"></svg:path><svg:path d="M10 14a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5"></svg:path><svg:path fill-rule="evenodd" d="M11.5 14.5h-3a1 1 0 0 0-1 1V18a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-2.5a1 1 0 0 0-1-1m-3 3.5v-2.5h3V18z" clip-rule="evenodd"></svg:path><svg:path d="M5.5 19a.5.5 0 0 1 0-1h9a.5.5 0 0 1 0 1z"></svg:path><svg:path fill-rule="evenodd" d="M19 12H1v-1h18z" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPrintMonitorOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintPesoOffIcon],svg[pepicons-print-peso-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd" opacity=".2"><svg:path d="M11.5 4h-5V2h5a5 5 0 0 1 5 5v1a5 5 0 0 1-5 5h-5v-2h5a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3"></svg:path><svg:path d="M6.5 2a1 1 0 0 1 1 1v15.5a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1"></svg:path><svg:path d="M2.5 5.936a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2h-14a1 1 0 0 1-1-1m0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2h-14a1 1 0 0 1-1-1"></svg:path></svg:g><svg:path fill-rule="evenodd" d="M10.5 2.5h-5v-1h5A4.5 4.5 0 0 1 15 6v1a4.5 4.5 0 0 1-4.5 4.5h-5v-1h5A3.5 3.5 0 0 0 14 7V6a3.5 3.5 0 0 0-3.5-3.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M5.5 1.5A.5.5 0 0 1 6 2v15.5a.5.5 0 0 1-1 0V2a.5.5 0 0 1 .5-.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M2 4.936a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 0 1h-14a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 0 1h-14a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPrintPesoOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

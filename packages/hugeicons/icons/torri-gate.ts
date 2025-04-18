import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTorriGateIcon],svg[hugeicons-torri-gate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8v13M18 8v13M3 8h18M3 12h18M10 8v4m4-4v4m6-9c-1.46 2.963-4.494 5-8 5c-3.505 0-6.54-2.037-8-5" color="currentColor"></svg:path>`,
})
export class HugeiconsTorriGateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

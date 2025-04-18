import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsSpreadsheetsIcon],svg[healthicons-spreadsheets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16 20v3h16v-3zm0 8v-3h4v3zm0 2v3h4v-3zm6 0v3h4v-3zm6 0v3h4v-3zm0-2v-3h4v3zm-2 0h-4v-3h4z"></svg:path><svg:path fill-rule="evenodd" d="M30 4H11a1 1 0 0 0-1 1v38a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V12h-7a1 1 0 0 1-1-1zM14 19a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H15a1 1 0 0 1-1-1z" clip-rule="evenodd"></svg:path><svg:path d="M37.414 10H32V4.586z"></svg:path></svg:g>`,
})
export class HealthiconsSpreadsheetsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

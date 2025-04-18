import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsSpreadsheetsOutlineIcon],svg[healthicons-spreadsheets-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M14 19a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H15a1 1 0 0 1-1-1zm2 6v3h4v-3zm0 8v-3h4v3zm6 0v-3h4v3zm6 0v-3h4v3zm0-8v3h4v-3zm-6 3h4v-3h-4zm-6-5h16v-3H16z"></svg:path><svg:path d="M10 5a1 1 0 0 1 1-1h20a1 1 0 0 1 .707.293l6 6A1 1 0 0 1 38 11v32a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1zm2 1v36h24V12h-5a1 1 0 0 1-1-1V6zm20 1.414V10h2.586z"></svg:path></svg:g>`,
})
export class HealthiconsSpreadsheetsOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

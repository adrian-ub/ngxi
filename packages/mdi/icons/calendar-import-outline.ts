import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarImportOutlineIcon],svg[mdi-calendar-import-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h4v-2H5V9h14v10h-4v2h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M5 7V5h14v2zm7 5l-4 4h3v6h2v-6h3z"></svg:path>`,
})
export class MdiCalendarImportOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

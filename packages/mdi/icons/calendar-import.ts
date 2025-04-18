import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarImportIcon],svg[mdi-calendar-import-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 12l-4 4h3v6h2v-6h3m3-13h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h4v-2H5V8h14v11h-4v2h4c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiCalendarImportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

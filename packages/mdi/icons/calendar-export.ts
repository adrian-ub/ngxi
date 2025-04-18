import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarExportIcon],svg[mdi-calendar-export-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 22l4-4h-3v-6h-2v6H8zm7-19h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h3l-2-2H5V8h14v11h-1l-2 2h3c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiCalendarExportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

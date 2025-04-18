import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHomeExportOutlineIcon],svg[mdi-home-export-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m24 13l-4 4v-3h-9v-2h9V9zM4 20v-8H1l10-9l7 6.3v.7h-2.21L11 5.69l-5 4.5V18h10v-2h2v4z"></svg:path>`,
})
export class MdiHomeExportOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

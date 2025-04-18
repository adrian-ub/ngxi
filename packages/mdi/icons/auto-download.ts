import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAutoDownloadIcon],svg[mdi-auto-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 17v2H11v-2zM19 4.5v5h3L16.5 15L11 9.5h3v-5zM10.7 15H8.8l-.7-2H4.9l-.7 2H2.3l3.2-9h2zm-3.05-3.35L6.5 8l-1.15 3.65z"></svg:path>`,
})
export class MdiAutoDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

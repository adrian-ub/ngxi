import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDownloadMultipleOutlineIcon],svg[mdi-download-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 14l7-7h-4V1H9v6H5zm0-2.83L9.83 9H11V3h2v6h1.17zM5 16v2h14v-2zm0 6v-2h14v2z"></svg:path>`,
})
export class MdiDownloadMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

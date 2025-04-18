import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiApplicationImportIcon],svg[mdi-application-import-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 12h9.8L8.3 9.5l1.4-1.4l4.9 4.9l-4.9 4.9l-1.4-1.4l2.5-2.5H1zM21 2H3c-1.1 0-2 .9-2 2v6.1h2V6h18v14H3v-4H1v4c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2"></svg:path>`,
})
export class MdiApplicationImportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTableBorderIcon],svg[mdi-table-border-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 19a1 1 0 0 1-1 1h-1v-2h2zm-6 1v-2h2v2zm-4 0v-2h2v2zm-4 0v-2h2v2zm-3 0a1 1 0 0 1-1-1v-1h2v2zM19 4H5a2 2 0 0 0-2 2v2h18V6c0-1.11-.89-2-2-2M5 14H3v2h2zm0-4H3v2h2zm16 0h-2v2h2zm0 4h-2v2h2zm-10 2v-2h2v2zm0-4v-2h2v2z"></svg:path>`,
})
export class MdiTableBorderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

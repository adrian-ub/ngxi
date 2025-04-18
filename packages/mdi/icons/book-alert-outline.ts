import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBookAlertOutlineIcon],svg[mdi-book-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2H4c-1.1 0-2 .9-2 2v16a2 2 0 0 0 2 2h12c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2m0 18H4V4h2v8l2.5-2.25L11 12V4h5zm4-5h2v2h-2zm2-8v6h-2V7z"></svg:path>`,
})
export class MdiBookAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

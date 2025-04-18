import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBookAlertIcon],svg[mdi-book-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4v16c0 1.11-.89 2-2 2H4a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h1v7l2.5-1.5L10 9V2h6a2 2 0 0 1 2 2m2 13h2v-2h-2zm0-10v6h2V7z"></svg:path>`,
})
export class MdiBookAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

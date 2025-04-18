import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSmartCardReaderIcon],svg[mdi-smart-card-reader-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4a2.07 2.07 0 0 0-2-2H5a2.07 2.07 0 0 0-2 2v14h18M8.25 16H7V6h1.25c1.66 0 2.5 3.34 2.5 5s-.84 5-2.5 5m6.25-2.5A2.5 2.5 0 1 1 17 11a2.5 2.5 0 0 1-2.5 2.5M23 21v1H1v-1a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2"></svg:path>`,
})
export class MdiSmartCardReaderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

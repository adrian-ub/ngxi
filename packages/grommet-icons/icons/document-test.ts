import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsDocumentTestIcon],svg[grommet-icons-document-test-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M4.998 6V1H19.5L23 4.5V23h-3M18 1v5h5M6 9h8M8 9v4.5l-5 8V23h14v-1.581L12 13.5V9m-6.5 8.5s2 1.5 4.5 0s4.5 0 4.5 0"></svg:path>`,
})
export class GrommetIconsDocumentTestIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

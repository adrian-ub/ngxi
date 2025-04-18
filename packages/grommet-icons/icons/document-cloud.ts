import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsDocumentCloudIcon],svg[grommet-icons-document-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M4.998 7V1H19.5L23 4.5V23h-4M18 1v5h5m-12 7H6.002A3.003 3.003 0 0 0 3 16c0 1.657 1.343 3 2.99 3H7v1.01A2.993 2.993 0 0 0 10.002 23h1.996A3 3 0 0 0 15 20.01V19m-4 0h4.998A3.003 3.003 0 0 0 19 16c0-1.657-1.343-3-2.99-3H15v-1.01A2.993 2.993 0 0 0 11.998 9h-1.996A3 3 0 0 0 7 11.99V13"></svg:path>`,
})
export class GrommetIconsDocumentCloudIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

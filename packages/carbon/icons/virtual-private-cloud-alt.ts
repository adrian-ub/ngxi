import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonVirtualPrivateCloudAltIcon],svg[carbon-virtual-private-cloud-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.414 22L10 8.586V2H2v8h6.586L22 23.414V30h8v-8ZM8 8H4V4h4Zm20 20h-4v-4h4Z"></svg:path><svg:path fill="currentColor" d="M30 6a3.992 3.992 0 0 0-7.858-1H13v2h9.142A4 4 0 0 0 25 9.858V19h2V9.858A3.996 3.996 0 0 0 30 6m-4 2a2 2 0 1 1 2-2a2 2 0 0 1-2 2m-7 17H9.858A4 4 0 0 0 7 22.142V13H5v9.142A3.992 3.992 0 1 0 9.858 27H19zM6 28a2 2 0 1 1 2-2a2 2 0 0 1-2 2"></svg:path>`,
})
export class CarbonVirtualPrivateCloudAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

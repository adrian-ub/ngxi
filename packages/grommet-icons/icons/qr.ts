import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsQrIcon],svg[grommet-icons-qr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path fill="currentColor" d="M13 14h1v1h-1zm1 1h1v1h-1zm0 1h1v1h-1zm2 0h1v1h-1zm0 1h1v1h-1zm-3-1h1v1h-1zm2 0h1v1h-1zm0 1h1v1h-1zm3-1h1v1h-1zm0-1h1v1h-1zm1-1h1v1h-1zm-2 2h1v1h-1zm0 1h1v1h-1zm-1 1h1v1h-1zm-1 0h1v1h-1zm2 0h1v1h-1zm1 0h1v1h-1zm-2 1h1v1h-1zm-2 0h1v1h-1zm1 0h1v1h-1zm-2 0h1v1h-1zm0 1h1v1h-1zm1 1h1v1h-1zm1 0h1v1h-1zm2 0h1v1h-1zm1 0h1v1h-1zm-1-2h1v1h-1zm1 0h1v1h-1zm1-1h1v1h-1zm0-1h1v1h-1zm0 3h1v1h-1zm0-1h1v1h-1zm1-1h1v1h-1zm0-1h1v1h-1zm1 3h1v1h-1zm0-2h1v1h-1zm0 1h1v1h-1zm-2-3h1v1h-1zm-6 1h1v1h-1zm-1 0h1v1h-1zm0 1h1v1h-1zm2 0h1v1h-1zm-3 0h1v1h-1zm2 0h1v1h-1zm-2 1h1v1h-1zm0 1h1v1h-1zm0-19h1v1h-1zm1 1h1v1h-1zm-1 2h1v1h-1zm1 1h1v1h-1zm-1 1h1v1h-1zm1 0h1v1h-1zm0 1h1v1h-1zm0 1h1v1h-1zm-1 1h1v1h-1zm1 0h1v1h-1zm-1 1h1v1h-1zM1 11h1v1H1zm1 1h1v1H2zm2-1h1v1H4zm0 1h1v1H4zm1-1h1v1H5zm1 1h1v1H6zm1-1h1v1H7zm1 1h1v1H8zm0-1h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 1h1v1h-1zm2 0h1v1h-1zm1-1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-1 2h1v1h-1zm-2 9h1v1h-1zm-1 0h1v1h-1zm0-9h1v1h-1zm-1 0h1v1h-1zm0 1h1v1h-1zm0 1h1v1h-1zm11-1h1v1h-1zm-1 1h1v1h-1zm1 2h1v1h-1zm-5-4h1v1h-1zm1-1h1v1h-1zm4 0h1v1h-1zm0 1h1v1h-1zm-1 0h1v1h-1zm1 8h1v1h-1zm-1 1h1v1h-1zm-2 0h1v1h-1zm3 0h1v1h-1z"></svg:path><svg:path stroke="currentColor" stroke-width="2" d="M15 2h7v7h-7zM2 2h7v7H2zm0 13h7v7H2zM18 5h1v1h-1zM5 5h1v1H5zm0 13h1v1H5z"></svg:path></svg:g>`,
})
export class GrommetIconsQrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

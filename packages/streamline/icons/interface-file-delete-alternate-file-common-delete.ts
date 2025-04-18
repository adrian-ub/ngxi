import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFileDeleteAlternateFileCommonDeleteIcon],svg[streamline-interface-file-delete-alternate-file-common-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.5 7V1.5a1 1 0 0 1 1-1h5l5 5v7a1 1 0 0 1-1 1H8"></svg:path><svg:path d="M8.5.5v5h5M4.74 9.26L.5 13.5m0-4.24l4.24 4.24"></svg:path></svg:g>`,
})
export class StreamlineInterfaceFileDeleteAlternateFileCommonDeleteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

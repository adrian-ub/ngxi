import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTransferRightIcon],svg[mdi-transfer-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8h2v8H3zm4 0h2v8H7zm4 0h2v8h-2zm4 11.25V4.75L22.25 12z"></svg:path>`,
})
export class MdiTransferRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

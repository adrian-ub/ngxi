import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxDownloadIcon],svg[bx-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 16l4-5h-3V4h-2v7H8z"></svg:path><svg:path fill="currentColor" d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2z"></svg:path>`,
})
export class BxDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

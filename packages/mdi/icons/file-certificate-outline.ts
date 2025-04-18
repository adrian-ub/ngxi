import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFileCertificateOutlineIcon],svg[mdi-file-certificate-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 13v-2l-2 1l-2-1v2l-2 1l2 1v2l2-1l2 1v-2l2-1M14 2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h1v-2H7V4h6v4h4v10h-1v2h1a2 2 0 0 0 2-2V7m-5 6v-2l-2 1l-2-1v2l-2 1l2 1v2l2-1l2 1v-2l2-1m-6 9l2-1l2 1v-5h-4m4-5v-2l-2 1l-2-1v2l-2 1l2 1v2l2-1l2 1v-2l2-1Z"></svg:path>`,
})
export class MdiFileCertificateOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

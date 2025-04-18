import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFileCertificateIcon],svg[mdi-file-certificate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3v3l2-1l2 1v-3h3a2 2 0 0 0 2-2V7m-5 8v2l-2-1l-2 1v-2l-2-1l2-1v-2l2 1l2-1v2l2 1m-3-6V3.5L17.5 8Z"></svg:path>`,
})
export class MdiFileCertificateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFileDownloadIcon],svg[tdesign-file-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1h12.414L21 6.586V11.5h-2V9h-6V3H5v18h8v2H3zm12 2.414V7h3.586zM20 13v7.11l2.508-2.48l1.406 1.422L19 23.91l-4.914-4.858l1.406-1.422L18 20.11V13z"></svg:path>`,
})
export class TdesignFileDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

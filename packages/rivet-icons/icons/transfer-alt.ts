import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsTransferAltIcon],svg[rivet-icons-transfer-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4.414V15h2V4.414l1.5 1.5L7.914 4.5L4 .586L.086 4.5L1.5 5.914zm10 7.172V1h-2v10.586l-1.5-1.5L8.086 11.5L12 15.414l3.914-3.914l-1.414-1.414z"></svg:path>`,
})
export class RivetIconsTransferAltIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

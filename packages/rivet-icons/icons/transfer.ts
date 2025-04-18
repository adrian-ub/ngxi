import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsTransferIcon],svg[rivet-icons-transfer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.586 3H1v2h10.586l-1.5 1.5L11.5 7.914L15.414 4L11.5.086L10.086 1.5zM4.414 13H15v-2H4.414l1.5-1.5L4.5 8.086L.586 12L4.5 15.914L5.914 14.5z"></svg:path>`,
})
export class RivetIconsTransferIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

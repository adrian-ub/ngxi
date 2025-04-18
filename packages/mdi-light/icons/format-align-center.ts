import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightFormatAlignCenterIcon],svg[mdi-light-format-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h17v1H3zm4 4h9v1H7zm-4 4h17v1H3zm4 4h9v1H7zm-4 4h17v1H3z"></svg:path>`,
})
export class MdiLightFormatAlignCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

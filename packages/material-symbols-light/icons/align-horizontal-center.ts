import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAlignHorizontalCenterIcon],svg[material-symbols-light-align-horizontal-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 21v-4.692H7v-2.039h4.5V9.731H4V7.692h7.5V3h1v4.692H20v2.039h-7.5v4.538H17v2.039h-4.5V21z"></svg:path>`,
})
export class MaterialSymbolsLightAlignHorizontalCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

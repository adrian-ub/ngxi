import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAlignVerticalCenterIcon],svg[material-symbols-light-align-vertical-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.596 20v-7.5H3v-1h4.596V4h2.039v7.5h4.73V7h2.039v4.5H21v1h-4.596V17h-2.039v-4.5h-4.73V20z"></svg:path>`,
})
export class MaterialSymbolsLightAlignVerticalCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

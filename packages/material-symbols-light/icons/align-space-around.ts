import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAlignSpaceAroundIcon],svg[material-symbols-light-align-space-around-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4V3h18v1zm0 17v-1h18v1zM7.5 8.5v-2h9v2zm0 9v-2h9v2z"></svg:path>`,
})
export class MaterialSymbolsLightAlignSpaceAroundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

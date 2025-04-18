import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAlignFlexCenterIcon],svg[material-symbols-light-align-flex-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.692 21v-8H3.5v-2h8.192V3h1v8H20.5v2h-7.808v8z"></svg:path>`,
})
export class MaterialSymbolsLightAlignFlexCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

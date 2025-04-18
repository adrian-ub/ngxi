import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAlignJustifyStretchIcon],svg[material-symbols-light-align-justify-stretch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 21V3h1v18zM3 21V3h1v18zm9.5-11.5v-2h5v2zm-6 0v-2h5v2zm6 7v-2h5v2zm-6 0v-2h5v2z"></svg:path>`,
})
export class MaterialSymbolsLightAlignJustifyStretchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

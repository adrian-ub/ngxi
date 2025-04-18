import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDensitySmallOutlineIcon],svg[material-symbols-light-density-small-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21v-1h16v1zm0-5.673v-1h16v1zm0-5.654v-1h16v1zM4 4V3h16v1z"></svg:path>`,
})
export class MaterialSymbolsLightDensitySmallOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

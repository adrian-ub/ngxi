import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAlignItemsStretchIcon],svg[material-symbols-light-align-items-stretch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 17.5v-11h2v11zm7 0v-11h2v11zM3 4V3h18v1zm0 17v-1h18v1z"></svg:path>`,
})
export class MaterialSymbolsLightAlignItemsStretchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

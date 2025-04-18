import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLiveTvOutlineSharpIcon],svg[material-symbols-light-live-tv-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 14.577L15.577 11L10 7.423zM9 20v-2H3V4h18v14h-6v2zm-5-3h16V5H4zm0 0V5z"></svg:path>`,
})
export class MaterialSymbolsLightLiveTvOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

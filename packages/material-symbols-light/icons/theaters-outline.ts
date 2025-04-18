import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTheatersOutlineIcon],svg[material-symbols-light-theaters-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 20.5v-17h1v2h3v-2h7v2h3v-2h1v17h-1v-2h-3v2h-7v-2h-3v2zm1-3h3v-3h-3zm0-4h3v-3h-3zm0-4h3v-3h-3zm10 8h3v-3h-3zm0-4h3v-3h-3zm0-4h3v-3h-3zm-6 10h5v-15h-5zm0-15h5z"></svg:path>`,
})
export class MaterialSymbolsLightTheatersOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

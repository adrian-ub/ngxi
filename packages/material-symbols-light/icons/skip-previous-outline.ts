import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSkipPreviousOutlineIcon],svg[material-symbols-light-skip-previous-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.73 16.616V7.385h1v9.23zm10.54 0L10.345 12l6.923-4.615zm-1-1.866v-5.5L12.138 12z"></svg:path>`,
})
export class MaterialSymbolsLightSkipPreviousOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

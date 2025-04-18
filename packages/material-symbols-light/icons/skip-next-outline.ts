import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSkipNextOutlineIcon],svg[material-symbols-light-skip-next-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.27 16.616V7.385h1v9.23zm-9.54 0V7.385L13.655 12zm1-1.866L11.862 12l-4.13-2.75z"></svg:path>`,
})
export class MaterialSymbolsLightSkipNextOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

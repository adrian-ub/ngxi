import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAutoReadPlayOutlineSharpIcon],svg[material-symbols-light-auto-read-play-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 13.077L14.616 10L10 6.923zm-7 7V3h18v14H6.077zM5.65 16H20V4H4v13.644zM4 16V4z"></svg:path>`,
})
export class MaterialSymbolsLightAutoReadPlayOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

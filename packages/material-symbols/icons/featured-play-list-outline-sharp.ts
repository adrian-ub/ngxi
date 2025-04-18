import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFeaturedPlayListOutlineSharpIcon],svg[material-symbols-featured-play-list-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 13h9v-2H6zm0-3h9V8H6zM2 20V4h20v16zm2-2h16V6H4zm0 0V6z"></svg:path>`,
})
export class MaterialSymbolsFeaturedPlayListOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

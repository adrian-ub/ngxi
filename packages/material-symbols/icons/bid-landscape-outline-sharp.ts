import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBidLandscapeOutlineSharpIcon],svg[material-symbols-bid-landscape-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V3h18v18zm2-4.05V19h14v-8.75L13.05 17L9 12.95zm0-2.85l4-4l3.95 3.95L19 7.25V5H5zm0-3.85v-3v6.8v-3.95v6.85v-4V17zm0 3.85V5v9.05v-3.95zm0 2.85v-4V17v-6.75V19z"></svg:path>`,
})
export class MaterialSymbolsBidLandscapeOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

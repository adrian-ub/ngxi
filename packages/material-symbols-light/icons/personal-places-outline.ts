import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPersonalPlacesOutlineIcon],svg[material-symbols-light-personal-places-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 19.5V5h8.558q.215 0 .39.105t.298.264L18.77 9l-2.523 3.63q-.123.16-.298.265t-.39.105H8v6.5zM8 12h7.5l2-3l-2-3H8zm0 0V6z"></svg:path>`,
})
export class MaterialSymbolsLightPersonalPlacesOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

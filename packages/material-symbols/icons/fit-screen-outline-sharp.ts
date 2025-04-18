import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFitScreenOutlineSharpIcon],svg[material-symbols-fit-screen-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 9V6h-3V4h5v5zM2 9V4h5v2H4v3zm15 11v-2h3v-3h2v5zM2 20v-5h2v3h3v2zm4-4V8h12v8zm2-2h8v-4H8zm0 0v-4z"></svg:path>`,
})
export class MaterialSymbolsFitScreenOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

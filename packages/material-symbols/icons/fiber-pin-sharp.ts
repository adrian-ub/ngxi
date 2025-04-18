import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFiberPinSharpIcon],svg[material-symbols-fiber-pin-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 15h1.5v-2H10V9H5zm6.25 0h1.5V9h-1.5zM14 15h1.25v-3.5L17.8 15H19V9h-1.25v3.5L15.25 9H14zm-7.5-3.5v-1h2v1zM2 20V4h20v16z"></svg:path>`,
})
export class MaterialSymbolsFiberPinSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

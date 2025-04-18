import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSipSharpIcon],svg[material-symbols-sip-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 15h2V9h-2zm3 0h1.5v-2H19V9h-5zm-9 0h5v-3.75H6.5v-.75H10V9H5v3.75h3.5v.75H5zm10.5-3.5v-1h2v1zM2 20V4h20v16z"></svg:path>`,
})
export class MaterialSymbolsSipSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

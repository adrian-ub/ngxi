import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBorgOutlineSharpIcon],svg[material-symbols-borg-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 17.125V6.875L12 1.7l9 5.175v10.25L12 22.3zM8 16v-3H5v2.95l6 3.475V16zm0-8h3V4.575L5 8.05V11h3zm2 6h4v-4h-4zm6 2h-3v3.425l6-3.475V13h-3zm0-8v3h3V8.05l-6-3.475V8z"></svg:path>`,
})
export class MaterialSymbolsBorgOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

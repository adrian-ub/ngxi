import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsImagesearchRollerOutlineSharpIcon],svg[material-symbols-imagesearch-roller-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 23h-6v-8h2v-3H2V4h4V2h14v6H6V6H4v4h10v5h2zm-4-2h2v-4h-2zM8 6h10V4H8zm4 15h2zM8 6V4z"></svg:path>`,
})
export class MaterialSymbolsImagesearchRollerOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

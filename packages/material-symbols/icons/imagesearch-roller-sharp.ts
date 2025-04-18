import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsImagesearchRollerSharpIcon],svg[material-symbols-imagesearch-roller-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 23h-6v-8h2v-3H2V4h4V2h14v6H6V6H4v4h10v5h2z"></svg:path>`,
})
export class MaterialSymbolsImagesearchRollerSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

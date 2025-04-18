import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPrivacyScreenOffSharpIcon],svg[material-symbols-privacy-screen-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.45 23.3l-3.3-3.3H3.4l6.875-6.875l-1.4-1.4L2 18.6v-4.175l4.775-4.8l-1.4-1.4L2 11.6V5.2h.35L.65 3.5l1.425-1.425l19.8 19.8ZM22 19.15l-8.875-8.875L19.4 4H22ZM11.725 8.875l-2.1-2.1L12.4 4h4.175Zm-3.5-3.5L6.85 4H9.6Z"></svg:path>`,
})
export class MaterialSymbolsPrivacyScreenOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

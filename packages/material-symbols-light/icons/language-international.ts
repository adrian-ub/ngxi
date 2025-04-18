import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLanguageInternationalIcon],svg[material-symbols-light-language-international-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.27 15.5v-7h1v7zm2.615 0v-7h1.23l3.13 6.065l-.36.05V8.5h1v7H8.654L5.525 9.435l.36-.05V15.5zm8.423 0v-6h-2v-1h5v1h-2v6zm4.423 0v-7h1v6h3v1z"></svg:path>`,
})
export class MaterialSymbolsLightLanguageInternationalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

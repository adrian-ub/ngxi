import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEdaSharpIcon],svg[material-symbols-light-eda-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22.27v-6.347h4.239l3.226 4.294l4.772-4.77l3.6-2.157l1.919 1.418l-7.562 7.561zm3.673-10.5v-9h1v9h2.664v-10h.99v10h2.664v-8H16v10.517l-4.43 4.419l-2.831-3.783H4V4.769h1v7z"></svg:path>`,
})
export class MaterialSymbolsLightEdaSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

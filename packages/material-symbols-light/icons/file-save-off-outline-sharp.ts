import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFileSaveOffOutlineSharpIcon],svg[material-symbols-light-file-save-off-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.189 18.1l-.689-.713l1.1-1.1l.688.713zM18.5 16.387l-1-1v-1.868h1zm-4 7.113v-1h5.887L5.5 7.614V18.5h6.616v1H4.5V6.614L1.412 3.5l.688-.688L21.788 22.5v1zm3-12.365h1V8L13 2.5H4.608l1.005 1H12.5v5h5zm-5.16-.908"></svg:path>`,
})
export class MaterialSymbolsLightFileSaveOffOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

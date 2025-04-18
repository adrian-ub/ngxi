import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightGifBoxSharpIcon],svg[material-symbols-light-gif-box-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V4h16v16zm7.539-5.288h.884V9.327h-.884zm-5.154 0h3.769v-2.539h-.885v1.654h-2v-3.615h2.885v-.885h-3.77zm7.538 0h.885v-2.154h1.923v-.885h-1.923v-1.461h2.923v-.885h-3.808z"></svg:path>`,
})
export class MaterialSymbolsLightGifBoxSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

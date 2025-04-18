import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightGifSharpIcon],svg[material-symbols-light-gif-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.808 14.692V9.308h.884v5.384zm-6.27 0V9.308h4.385v.884h-3.5v3.616h2.616v-1.654h.884v2.538zm9.039 0V9.308h3.885v.884h-3v1.462h2v.885h-2v2.153z"></svg:path>`,
})
export class MaterialSymbolsLightGifSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLight4gPlusMobiledataSharpIcon],svg[material-symbols-light-4g-plus-mobiledata-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.192 14.5v-2h-2v-1h2v-2h1v2h2v1h-2v2zm-14.384 2v-3h-4v-6h1v5h3v-5h1v5h1v1h-1v3zm3.769 0v-9h7v1h-6v7h5v-3h-2v-1h3v5z"></svg:path>`,
})
export class MaterialSymbolsLight4gPlusMobiledataSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLight4gMobiledataSharpIcon],svg[material-symbols-light-4g-mobiledata-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 16.5v-3h-4v-6h1v5h3v-5h1v5h2v1h-2v3zm5 0v-9h8v1h-7v7h6v-3H17v-1h3.5v5z"></svg:path>`,
})
export class MaterialSymbolsLight4gMobiledataSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

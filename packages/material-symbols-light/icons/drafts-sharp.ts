import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDraftsSharpIcon],svg[material-symbols-light-drafts-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 2.192l9 5.34V20H3V7.533zm0 10.458L19.8 8L12 3.35L4.2 8z"></svg:path>`,
})
export class MaterialSymbolsLightDraftsSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

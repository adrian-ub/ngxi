import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMintmarkSharpIcon],svg[material-symbols-mintmark-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 21v-2h4.6L13 14.4v-2.8l6 6V13h2v8zm-7-4v-1H3v-2h6v-3H3V4h3V3h2v1h3v2H5v3h6v7H8v1z"></svg:path>`,
})
export class MaterialSymbolsMintmarkSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFortIcon],svg[material-symbols-light-fort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 20.5v-3.288l2-2V8.789l-2-2V3.5h1v2h3v-2h1v2h3v-2h1v3.289l-2 2V10.5h7V8.789l-2-2V3.5h1v2h3v-2h1v2h3v-2h1v3.289l-2 2v6.423l2 2V20.5h-8V18q0-1.031-.735-1.766q-.736-.734-1.769-.734t-1.764.735Q9.5 16.969 9.5 18v2.5z"></svg:path>`,
})
export class MaterialSymbolsLightFortIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

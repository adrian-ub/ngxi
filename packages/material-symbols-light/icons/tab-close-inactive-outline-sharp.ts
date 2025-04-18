import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTabCloseInactiveOutlineSharpIcon],svg[material-symbols-light-tab-close-inactive-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.654 20v-1h3.23v1zm-5 0v-1h3.538v1zM4.5 9.846h-1v-3.23h1zm0 5h-1v-3.538h1zM7.192 20H3.5v-3.692h1V19h2.692zm4.208-7.211l2.1-2.1l2.1 2.1l.688-.689l-2.1-2.1l2.1-2.1l-.688-.689l-2.1 2.1l-2.1-2.1l-.688.689l2.1 2.1l-2.1 2.1zM6.5 17V3h14v14zm1-1h12V4h-12zm0 0V4z"></svg:path>`,
})
export class MaterialSymbolsLightTabCloseInactiveOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

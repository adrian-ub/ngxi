import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAccountTreeOutlineIcon],svg[material-symbols-light-account-tree-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 20.5v-3h-4v-10h-3v3h-6v-7h6v3h7v-3h6v7h-6v-3h-3v9h3v-3h6v7zm-12-16v5zm13 10v5zm0-10v5zm0 5h4v-5h-4zm0 10h4v-5h-4zm-13-10h4v-5h-4z"></svg:path>`,
})
export class MaterialSymbolsLightAccountTreeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDraftsOutlineSharpIcon],svg[material-symbols-drafts-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1l10 5.975V21H2V6.975zm0 11.65L19.8 8L12 3.35L4.2 8zM12 15l-8-4.8V19h16v-8.8zm0 4h8H4z"></svg:path>`,
})
export class MaterialSymbolsDraftsOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

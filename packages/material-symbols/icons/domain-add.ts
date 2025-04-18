import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDomainAddIcon],svg[material-symbols-domain-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 21V3h10v4h10v8h-2V9h-8v2h2v2h-2v2h2v2h-2v2h4v2zm2-2h2v-2H4zm0-4h2v-2H4zm0-4h2V9H4zm0-4h2V5H4zm4 12h2v-2H8zm0-4h2v-2H8zm0-4h2V9H8zm0-4h2V5H8zm12 16v-2h-2v-2h2v-2h2v2h2v2h-2v2zm-4-10v-2h2v2zm0 4v-2h2v2z"></svg:path>`,
})
export class MaterialSymbolsDomainAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

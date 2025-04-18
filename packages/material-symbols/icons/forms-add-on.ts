import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFormsAddOnIcon],svg[material-symbols-forms-add-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 20.975v-3h-3v-2h3v-3h2v3h3v2h-3v3zM3 18v-2h2v2zm4 0v-2h4.075q-.075.525-.062 1t.087 1zm-4-4v-2h2v2zm4 0v-2h6.65q-.575.4-1.037.9T11.8 14zm-4-4V8h2v2zm4 0V8h12v2zM3 6V4h2v2zm4 0V4h12v2z"></svg:path>`,
})
export class MaterialSymbolsFormsAddOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

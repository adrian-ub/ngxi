import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTuneSharpIcon],svg[material-symbols-tune-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19v-2h6v2H3ZM3 7V5h10v2H3Zm8 14v-6h2v2h8v2h-8v2h-2Zm-4-6v-2H3v-2h4V9h2v6H7Zm4-2v-2h10v2H11Zm4-4V3h2v2h4v2h-4v2h-2Z"></svg:path>`,
})
export class MaterialSymbolsTuneSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

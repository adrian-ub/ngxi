import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTabUnselectedSharpIcon],svg[material-symbols-tab-unselected-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20v-2h2v2zm0-4v-2h2v2zm0-4v-2h2v2zm0-4V4h4v2H4v2zm4 12v-2h2v2zM8 6V4h2v2zm2 14v-2h2v2zm2-10V4h10v6zm2 10v-2h2v2zm4 0v-2h2v-2h2v4zm2-6v-2h2v2z"></svg:path>`,
})
export class MaterialSymbolsTabUnselectedSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

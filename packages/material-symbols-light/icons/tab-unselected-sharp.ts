import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTabUnselectedSharpIcon],svg[material-symbols-light-tab-unselected-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19v-1.77h1V18h.77v1zm0-3.77v-2h1v2zm0-4v-2h1v2zm0-4V5h3v1H4v1.23zM6.77 19v-1h2v1zM8 6V5h2v1zm2.77 13v-1h2v1zM12 10V5h9v5zm2.77 9v-1h2v1zm4 0v-1H20v-2h1v3zM20 14v-2h1v2z"></svg:path>`,
})
export class MaterialSymbolsLightTabUnselectedSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

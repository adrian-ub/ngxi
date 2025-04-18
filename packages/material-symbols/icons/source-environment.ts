import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSourceEnvironmentIcon],svg[material-symbols-source-environment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 21V4.75L7 1l5 3.75V7h10v14zm2-2h2v-2H4zm0-4h2v-2H4zm0-4h2V9H4zm0-4h2V5H4zm4 0h2V5H8zm0 12h12V9H8zm6-6v-2h4v2zm0 4v-2h4v2zm-4-4v-2h2v2zm0 4v-2h2v2z"></svg:path>`,
})
export class MaterialSymbolsSourceEnvironmentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

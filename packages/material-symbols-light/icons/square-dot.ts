import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSquareDotIcon],svg[material-symbols-light-square-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V4h16v16zm1-1h14V5H5zm7-3.75q-1.362 0-2.306-.944T8.75 12t.944-2.306T12 8.75t2.306.944T15.25 12t-.944 2.306T12 15.25"></svg:path>`,
})
export class MaterialSymbolsLightSquareDotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

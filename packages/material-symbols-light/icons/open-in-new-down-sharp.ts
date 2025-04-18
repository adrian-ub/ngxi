import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightOpenInNewDownSharpIcon],svg[material-symbols-light-open-in-new-down-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V4h16v7.616h-1V5H5v14h6.616v1zm10 0v-1h4.312L9.089 9.777l.688-.688L19 18.287V14h1v6z"></svg:path>`,
})
export class MaterialSymbolsLightOpenInNewDownSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

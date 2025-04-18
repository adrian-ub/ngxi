import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAutoReadPlaySharpIcon],svg[material-symbols-light-auto-read-play-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 13.077L14.616 10L10 6.923zm-7 7V3h18v14H6.077z"></svg:path>`,
})
export class MaterialSymbolsLightAutoReadPlaySharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

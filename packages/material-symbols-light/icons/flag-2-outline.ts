import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFlag2OutlineIcon],svg[material-symbols-light-flag-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 21V4h14l-2.096 4.27L20 12.538H7V21zm1-9.461h11.416l-1.624-3.27L18.416 5H7zm0 0V5z"></svg:path>`,
})
export class MaterialSymbolsLightFlag2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

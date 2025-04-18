import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDetailsIcon],svg[material-symbols-light-details-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.692 20L12 5.058L20.308 20zM5.4 19h6.1V8.021zm7.1 0h6.1L12.5 8.021z"></svg:path>`,
})
export class MaterialSymbolsLightDetailsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

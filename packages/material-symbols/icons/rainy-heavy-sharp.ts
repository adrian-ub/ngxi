import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsRainyHeavySharpIcon],svg[material-symbols-rainy-heavy-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.55 19.35L.65 5.55l1.8-.875l6.9 13.75zm4.675 0l-6.9-13.8l1.8-.9L14 18.425zm4.675 0L10 5.55l1.775-.9l6.9 13.775zm4.65-.025L14.675 5.55l1.775-.9l6.9 13.8z"></svg:path>`,
})
export class MaterialSymbolsRainyHeavySharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

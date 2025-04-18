import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTripSharpIcon],svg[material-symbols-light-trip-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 20V7h4v13zM10 7h4V5h-4zM8 20V7h1V4h6v3h1v13zm-5 0V7h4v13z"></svg:path>`,
})
export class MaterialSymbolsLightTripSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

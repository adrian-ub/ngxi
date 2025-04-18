import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTripOutlineSharpIcon],svg[material-symbols-light-trip-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20V7h6V4h6v3h6v13zm7-13h4V5h-4zM7 8H4v11h3zm9 11V8H8v11zm1-11v11h3V8zm-5 5.5"></svg:path>`,
})
export class MaterialSymbolsLightTripOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

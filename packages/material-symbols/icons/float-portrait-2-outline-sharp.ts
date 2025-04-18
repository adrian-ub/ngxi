import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFloatPortrait2OutlineSharpIcon],svg[material-symbols-float-portrait-2-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 11h6V6H8zm12 11H4V2h16zm-2-2V4H6v16zm0-16H6z"></svg:path>`,
})
export class MaterialSymbolsFloatPortrait2OutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFloatPortrait2OutlineSharpIcon],svg[material-symbols-light-float-portrait-2-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.385 11.385h6v-5h-6zM19 21H5V3h14zm-1-1V4H6v16zm0-16H6z"></svg:path>`,
})
export class MaterialSymbolsLightFloatPortrait2OutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

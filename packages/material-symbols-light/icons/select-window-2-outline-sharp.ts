import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSelectWindow2OutlineSharpIcon],svg[material-symbols-light-select-window-2-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20h12.23v-9.384H4zm13.23-5.616v-1H20V4H7.77v5.616h-1V3H21v11.385zM3 21V9.616h14.23V21zm7.116-5.692"></svg:path>`,
})
export class MaterialSymbolsLightSelectWindow2OutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

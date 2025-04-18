import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAzmOutlineIcon],svg[material-symbols-light-azm-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 20.596V13H3.404l8-8H19v7.596zm4.5-5.921l2.5-2.5V6h-6.175l-2.5 2.5H15.5zm-3.5 3.5l2.5-2.5V9.5H8.325l-2.5 2.5H12z"></svg:path>`,
})
export class MaterialSymbolsLightAzmOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

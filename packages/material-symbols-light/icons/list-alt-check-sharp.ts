import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightListAltCheckSharpIcon],svg[material-symbols-light-list-alt-check-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V4h16v9.489l-2.746 2.746l-2.029-2.03l-4.096 4.072L12.852 20zm3.346-7.23h1.538v-1.54H7.346zm0-3.77h1.538V7.462H7.346zm3.846 3.5h5.385v-1h-5.385zm0-3.77h5.385v-1h-5.385zM17.254 21l-2.742-2.723l.713-.708l2.029 2.029l4.057-4.057l.708.713z"></svg:path>`,
})
export class MaterialSymbolsLightListAltCheckSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

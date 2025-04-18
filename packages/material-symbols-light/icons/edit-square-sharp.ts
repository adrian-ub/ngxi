import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEditSquareSharpIcon],svg[material-symbols-light-edit-square-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 14v-2.615l9.683-9.683l2.56 2.564L12.518 14zm9.466-8.354l1.347-1.361l-1.111-1.17l-1.387 1.381zM4 20V4h10.002l-6.386 6.387v5.998h5.896L20 9.895V20z"></svg:path>`,
})
export class MaterialSymbolsLightEditSquareSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

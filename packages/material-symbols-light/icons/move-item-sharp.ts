import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMoveItemSharpIcon],svg[material-symbols-light-move-item-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.592 12.5H9.154v-1h11.438l-2.088-2.089l.707-.719L22.52 12l-3.307 3.308l-.708-.72zm-5.188-3.77V5H5v14h10.404v-3.73h1V20H4V4h12.404v4.73z"></svg:path>`,
})
export class MaterialSymbolsLightMoveItemSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

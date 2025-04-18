import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFitPageWidthOutlineSharpIcon],svg[material-symbols-light-fit-page-width-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.808 14.539V9.46L6.269 12zM17.73 12l-2.539-2.539v5.078zM3 19V5h18v14zM20 6H4v12h16zM4 6v12z"></svg:path>`,
})
export class MaterialSymbolsLightFitPageWidthOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

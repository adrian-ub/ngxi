import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStayCurrentPortraitOutlineSharpIcon],svg[material-symbols-stay-current-portrait-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 23V1h14v22H5Zm2-5h10V6H7v12Zm0 3h10v-1H7v1ZM7 4h10V3H7v1Zm0 0V3v1Zm0 17v-1v1Z"></svg:path>`,
})
export class MaterialSymbolsStayCurrentPortraitOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCopyAllSharpIcon],svg[material-symbols-light-copy-all-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 17.423v-1.23h1.23v1.23zm0-3.577v-1.23h1.23v1.23zm0-3.577V9.04h1.23v1.23zM7.577 21v-1.23h1.23V21zm.115-3.692V3H19v14.308zM11.154 21v-1.23h1.23V21zM4 21v-1.23h1.23V21zm10.73 0v-1.23h1.232V21zM4 6.692v-1.23h1.23v1.23z"></svg:path>`,
})
export class MaterialSymbolsLightCopyAllSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLight60fpsSharpIcon],svg[material-symbols-light-60fps-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.885 18.116V5.885h6.23v1.23h-5v3.77h6v7.23zm1.23-1.231h4.77v-4.77h-4.77zm10 0h5.77v-9.77h-5.77zm-1.23 1.23V5.886h8.23v12.23z"></svg:path>`,
})
export class MaterialSymbolsLight60fpsSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

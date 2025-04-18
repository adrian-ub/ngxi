import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLight60fpsSelectSharpIcon],svg[material-symbols-light-60fps-select-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.116 13V5h5.5v1h-4.5v2.5h4.5V13zm1-1h3.5V9.5h-3.5zm7.269 1V5h5.5v8zm1-1h3.5V6h-3.5zM3.846 21.5v-4h1v4zm3.385 0v-4h1v4zm3.384 0v-4h1v4zm3.385 0v-4h6.154v4z"></svg:path>`,
})
export class MaterialSymbolsLight60fpsSelectSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

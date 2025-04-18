import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightUnarchiveOutlineSharpIcon],svg[material-symbols-light-unarchive-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 10.577l-3.308 3.308l.708.707l2.1-2.1v4.7h1v-4.7l2.1 2.1l.708-.707zm-7-2.77V19h14V7.808zM4 20V6.916L6.416 4h11.15L20 6.954V20zM5.38 6.808H18.6L17.096 5H6.885zM12 13.404"></svg:path>`,
})
export class MaterialSymbolsLightUnarchiveOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

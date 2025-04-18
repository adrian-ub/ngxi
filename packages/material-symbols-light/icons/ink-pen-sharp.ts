import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightInkPenSharpIcon],svg[material-symbols-light-ink-pen-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.948 12.533l-2.327-2.352l4.083-4.077l-.821-.821l-5.34 5.34l-.708-.67l6.067-6.066l1.51 1.51l1.397-1.399l2.347 2.346zM6.462 20H4.135v-2.327l6.754-6.76l2.352 2.328z"></svg:path>`,
})
export class MaterialSymbolsLightInkPenSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

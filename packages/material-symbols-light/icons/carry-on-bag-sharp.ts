import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCarryOnBagSharpIcon],svg[material-symbols-light-carry-on-bag-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.998 21.039q-.642 0-1.09-.45q-.446-.45-.446-1.091t.449-1.09q.45-.446 1.091-.446t1.09.449t.447 1.091t-.45 1.09q-.45.447-1.091.447M7 20V8h2.5v12zm3.385 0V8H14V4h-1.616V3H15v14.077q-1.01 0-1.716.707t-.707 1.716q0 .134.009.25t.05.25z"></svg:path>`,
})
export class MaterialSymbolsLightCarryOnBagSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

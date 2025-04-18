import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightOvenOutlineSharpIcon],svg[material-symbols-light-oven-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 7.385q.425 0 .713-.288T17 6.385t-.288-.713T16 5.384t-.713.288t-.287.713t.287.712t.713.288m-4 0q.425 0 .712-.288T13 6.385t-.288-.713T12 5.384t-.713.288t-.287.713t.287.712t.713.288m-4 0q.425 0 .712-.288T9 6.385t-.288-.713T8 5.384t-.713.288T7 6.385t.287.712t.713.288m-3 2.23V19h14V9.616zm5.384 3.616h3.231V12h-3.23zM4 20V4h16v16zm8-10.385"></svg:path>`,
})
export class MaterialSymbolsLightOvenOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLaptopCarSharpIcon],svg[material-symbols-laptop-car-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 22v-6.225L11.65 11h8.7L22 15.775V22h-2v-1.5h-8V22zm1.85-7h8.3l-.875-2.5h-6.55zm1.65 3.75q.425 0 .713-.288t.287-.712t-.288-.712t-.712-.288t-.712.288t-.288.712t.288.713t.712.287m5 0q.425 0 .713-.288t.287-.712t-.288-.712t-.712-.288t-.712.288t-.288.712t.288.713t.712.287M1 20v-3h2V4h17v5h-9.775L8 15.3V20z"></svg:path>`,
})
export class MaterialSymbolsLaptopCarSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

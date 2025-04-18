import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsOilBarrelIcon],svg[material-symbols-oil-barrel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21q-.425 0-.712-.288T3 20t.288-.712T4 19h1v-6H4q-.425 0-.712-.288T3 12t.288-.712T4 11h1V5H4q-.425 0-.712-.288T3 4t.288-.712T4 3h16q.425 0 .713.288T21 4t-.288.713T20 5h-1v6h1q.425 0 .713.288T21 12t-.288.713T20 13h-1v6h1q.425 0 .713.288T21 20t-.288.713T20 21zm8-5q1.25 0 2.125-.862T15 13.05q0-.975-.562-1.675T12 8.5q-1.875 2.15-2.437 2.863T9 13.05q0 1.225.875 2.088T12 16"></svg:path>`,
})
export class MaterialSymbolsOilBarrelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

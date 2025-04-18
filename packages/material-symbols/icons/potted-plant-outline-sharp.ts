import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPottedPlantOutlineSharpIcon],svg[material-symbols-potted-plant-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.55 20h6.9l1-4h-8.9zM7 22l-1.5-6h13L17 22zm-2-8h14v-2H5zm7-6q0-2.5 1.75-4.25T18 2q0 2.25-1.425 3.9T13 7.9V10h8v6H3v-6h8V7.9q-2.15-.35-3.575-2T6 2q2.5 0 4.25 1.75T12 8"></svg:path>`,
})
export class MaterialSymbolsPottedPlantOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

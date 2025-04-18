import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPottedPlantSharpIcon],svg[material-symbols-potted-plant-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 22l-1.5-6h13L17 22zm5-14q0-2.5 1.75-4.25T18 2q0 2.25-1.425 3.9T13 7.9V10h8v5H3v-5h8V7.9q-2.15-.35-3.575-2T6 2q2.5 0 4.25 1.75T12 8"></svg:path>`,
})
export class MaterialSymbolsPottedPlantSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

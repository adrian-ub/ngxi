import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightbulb2Icon],svg[material-symbols-lightbulb-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 18q-.825 0-1.412-.587T8 16v-1.25q-1.425-.975-2.212-2.5T5 9q0-2.925 2.038-4.962T12 2t4.963 2.038T19 9q0 1.725-.788 3.238T16 14.75V16q0 .825-.587 1.413T14 18zm0 4q-.425 0-.712-.288T9 21v-1h6v1q0 .425-.288.713T14 22z"></svg:path>`,
})
export class MaterialSymbolsLightbulb2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

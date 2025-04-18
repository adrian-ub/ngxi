import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFileSaveOffSharpIcon],svg[material-symbols-light-file-save-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.189 18.1l-.689-.713l1.1-1.1l.688.713zM18.5 16.387l-1-1v-1.868h1zm0-5.252h-5.252L5.614 3.5l-1.006-1H13L18.5 8zm-6.384 3.094l8.27 8.271H14.5v1h7.289v-1L2.1 2.812l-.688.688L4.5 6.614V19.5h7.616zM17.5 8.5l-5-5zl-5-5v5z"></svg:path>`,
})
export class MaterialSymbolsLightFileSaveOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

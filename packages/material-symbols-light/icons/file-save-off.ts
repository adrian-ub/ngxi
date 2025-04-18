import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFileSaveOffIcon],svg[material-symbols-light-file-save-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 23.5v-1h5.887l-8.271-8.271V19.5h-6q-.652 0-1.134-.482T4.5 17.884V6.615L1.412 3.5l.688-.688L21.788 22.5v1zm5.689-5.4l-.689-.713l1.1-1.1l.688.713zM18.5 16.387l-1-1v-1.868h1zm-5.252-5.252L5.05 2.942q.206-.202.479-.322t.587-.12H13L18.5 8v3.135zM12.5 8.5h5l-5-5z"></svg:path>`,
})
export class MaterialSymbolsLightFileSaveOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

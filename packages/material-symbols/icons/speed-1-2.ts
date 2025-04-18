import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeed12Icon],svg[material-symbols-speed-1-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17V9H5V7h4v10zm3 0v-2h2v2zm3 0h6v-2h-4v-2h2q.825 0 1.413-.587T19 11V9q0-.825-.587-1.412T17 7h-4v2h4v2h-2q-.825 0-1.412.588T13 13z"></svg:path>`,
})
export class MaterialSymbolsSpeed12Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

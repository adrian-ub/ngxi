import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFileSaveOffIcon],svg[material-symbols-file-save-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 24v-2h5.175L12 14.825V20H6q-.825 0-1.412-.587T4 18V6.825L.7 3.5l1.4-1.4L22 22v2zm6.9-5.9l-1.4-1.425l1.1-1.1L22 17zM19 16.175l-2-2V13h2zM13.825 11L5.05 2.25q.225-.125.45-.187T6 2h7l6 6v3zM12 9h5l-5-5z"></svg:path>`,
})
export class MaterialSymbolsFileSaveOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFileSaveOffOutlineIcon],svg[material-symbols-file-save-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.9 18.1l-1.4-1.425l1.1-1.1L22 17zM19 16.175l-2-2V13h2zM14 24v-2h5.175L6 8.825V18h6v2H6q-.825 0-1.412-.587T4 18V6.825L.7 3.5l1.4-1.4L22 22v2zm3-13h2V8l-6-6H6q-.275 0-.5.063t-.45.187L6.825 4H12v5h5zm-4.025-.85"></svg:path>`,
})
export class MaterialSymbolsFileSaveOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

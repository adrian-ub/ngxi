import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFolderOffOutlineIcon],svg[material-symbols-folder-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.775 18.95L20 17.175V8h-9.15l-2-2l-2-2H9.7l2 2H20q.825 0 1.413.588T22 8v10q0 .275-.05.513t-.175.437m-1.3 4.35l-3.3-3.3H4q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4l2 2H4v12h11.175L.7 3.5l1.4-1.4l19.8 19.8zm-6.05-11.725"></svg:path>`,
})
export class MaterialSymbolsFolderOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

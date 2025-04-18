import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFolderCodeOutlineRoundedIcon],svg[material-symbols-folder-code-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18V6v13zm0 2q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8v4q0 .425-.288.713T21 13t-.712-.288T20 12V8h-8.825l-2-2H4v12h4q.425 0 .713.288T9 19t-.288.713T8 20zm9.825-1l1.475 1.475q.3.3.3.7t-.3.7t-.712.3t-.713-.3L11.7 19.7q-.3-.3-.3-.7t.3-.7l2.175-2.175q.3-.3.713-.3t.712.3t.3.7t-.3.7zm6.35 0L18.7 17.525q-.3-.3-.3-.7t.3-.7t.713-.3t.712.3L22.3 18.3q.3.3.3.7t-.3.7l-2.175 2.175q-.3.3-.713.3t-.712-.3t-.3-.7t.3-.7z"></svg:path>`,
})
export class MaterialSymbolsFolderCodeOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

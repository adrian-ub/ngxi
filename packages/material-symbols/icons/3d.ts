import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbols3dIcon],svg[material-symbols-3d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 15h3q.825 0 1.413-.587T18 13v-2q0-.825-.587-1.412T16 9h-3zm1.5-1.5v-3H16q.2 0 .35.15t.15.35v2q0 .2-.15.35t-.35.15zm-8 1.5H10q.425 0 .713-.288T11 14v-1q0-.425-.288-.712T10 12q.425 0 .713-.288T11 11v-1q0-.425-.288-.712T10 9H6.5v1.5h3v.75h-2v1.5h2v.75h-3zM4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20z"></svg:path>`,
})
export class MaterialSymbols3dIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

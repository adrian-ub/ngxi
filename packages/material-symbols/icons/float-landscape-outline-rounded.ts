import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFloatLandscapeOutlineRoundedIcon],svg[material-symbols-float-landscape-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v4q0 .425-.288.713T21 11q-.425 0-.713-.288T20 10V6H4v12h10q.425 0 .713.288T15 19q0 .425-.288.713T14 20H4Zm14 0q-.425 0-.713-.288T17 19v-5q0-.425.288-.713T18 13h3q.425 0 .713.288T22 14v5q0 .425-.288.713T21 20h-3Zm-6-8Z"></svg:path>`,
})
export class MaterialSymbolsFloatLandscapeOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

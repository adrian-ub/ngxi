import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFloatPortraitRoundedIcon],svg[material-symbols-float-portrait-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 22q-.425 0-.713-.288T15 21v-5q0-.425.288-.713T16 15h3q.425 0 .713.288T20 16v5q0 .425-.288.713T19 22h-3ZM6 22q-.825 0-1.413-.588T4 20V4q0-.825.588-1.413T6 2h12q.825 0 1.413.588T20 4v8q0 .425-.288.713T19 13h-4q-.825 0-1.413.588T13 15v6q0 .425-.288.713T12 22H6Z"></svg:path>`,
})
export class MaterialSymbolsFloatPortraitRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

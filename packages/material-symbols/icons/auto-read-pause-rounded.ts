import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAutoReadPauseRoundedIcon],svg[material-symbols-auto-read-pause-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 14q.425 0 .713-.288T11 13V7q0-.425-.288-.712T10 6t-.712.288T9 7v6q0 .425.288.713T10 14m4 0q.425 0 .713-.288T15 13V7q0-.425-.288-.712T14 6t-.712.288T13 7v6q0 .425.288.713T14 14m-8 4l-2.3 2.3q-.475.475-1.088.213T2 19.575V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18z"></svg:path>`,
})
export class MaterialSymbolsAutoReadPauseRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

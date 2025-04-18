import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSkilletCooktopOutlineIcon],svg[material-symbols-skillet-cooktop-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 15q-1.25 0-2.125-.875T3 12V8h13.025q.125-.825.675-1.475t1.35-.925l4.625-1.55l.625 1.9l-4.625 1.55q-.3.1-.488.363T18 8.45V12q0 1.25-.875 2.125T15 15zm0-2h9q.425 0 .713-.288T16 12v-2H5v2q0 .425.288.713T6 13m3 8v-3H2v-2h7q.825 0 1.413.588T11 18v3zm4 0v-3q0-.825.588-1.412T15 16h7v2h-7v3zm-2.5-9.5"></svg:path>`,
})
export class MaterialSymbolsSkilletCooktopOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

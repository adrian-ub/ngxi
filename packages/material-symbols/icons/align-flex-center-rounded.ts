import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAlignFlexCenterRoundedIcon],svg[material-symbols-align-flex-center-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-.425 0-.712-.288T11 21v-7.5H4q-.425 0-.712-.288T3 12.5v-1q0-.425.288-.712T4 10.5h7V3q0-.425.288-.712T12 2t.713.288T13 3v7.5h7q.425 0 .713.288T21 11.5v1q0 .425-.288.713T20 13.5h-7V21q0 .425-.288.713T12 22"></svg:path>`,
})
export class MaterialSymbolsAlignFlexCenterRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

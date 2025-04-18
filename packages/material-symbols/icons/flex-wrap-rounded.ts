import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlexWrapRoundedIcon],svg[material-symbols-flex-wrap-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 21v-7q0-.425.288-.712T2 13h4q.425 0 .713.288T7 14v7q0 .425-.288.713T6 22H2q-.425 0-.712-.288T1 21m8 0v-7q0-.425.288-.712T10 13h4q.425 0 .713.288T15 14v7q0 .425-.288.713T14 22h-4q-.425 0-.712-.288T9 21m8 0v-7q0-.425.288-.712T18 13h4q.425 0 .713.288T23 14v7q0 .425-.288.713T22 22h-4q-.425 0-.712-.288T17 21m-6-1h2v-5h-2zM1 10V3q0-.425.288-.712T2 2h4q.425 0 .713.288T7 3v7q0 .425-.288.713T6 11H2q-.425 0-.712-.288T1 10m8 0V3q0-.425.288-.712T10 2h4q.425 0 .713.288T15 3v7q0 .425-.288.713T14 11h-4q-.425 0-.712-.288T9 10m8 0V3q0-.425.288-.712T18 2h4q.425 0 .713.288T23 3v7q0 .425-.288.713T22 11h-4q-.425 0-.712-.288T17 10M3 9h2V4H3zm16 0h2V4h-2z"></svg:path>`,
})
export class MaterialSymbolsFlexWrapRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

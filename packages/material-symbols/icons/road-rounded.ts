import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsRoadRoundedIcon],svg[material-symbols-road-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20q-.425 0-.712-.288T4 19V5q0-.425.288-.712T5 4t.713.288T6 5v14q0 .425-.288.713T5 20m7 0q-.425 0-.712-.288T11 19v-2q0-.425.288-.712T12 16t.713.288T13 17v2q0 .425-.288.713T12 20m7 0q-.425 0-.712-.288T18 19V5q0-.425.288-.712T19 4t.713.288T20 5v14q0 .425-.288.713T19 20m-7-6q-.425 0-.712-.288T11 13v-2q0-.425.288-.712T12 10t.713.288T13 11v2q0 .425-.288.713T12 14m0-6q-.425 0-.712-.288T11 7V5q0-.425.288-.712T12 4t.713.288T13 5v2q0 .425-.288.713T12 8"></svg:path>`,
})
export class MaterialSymbolsRoadRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

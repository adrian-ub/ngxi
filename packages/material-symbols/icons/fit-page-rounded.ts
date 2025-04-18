import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFitPageRoundedIcon],svg[material-symbols-fit-page-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20V4q0-.425.288-.712T4 3t.713.288T5 4v16q0 .425-.288.713T4 21t-.712-.288T3 20m16 0V4q0-.425.288-.712T20 3t.713.288T21 4v16q0 .425-.288.713T20 21t-.712-.288T19 20M12 9q-.425 0-.712-.288T11 8t.288-.712T12 7t.713.288T13 8t-.288.713T12 9m-4 4q-.425 0-.712-.288T7 12t.288-.712T8 11t.713.288T9 12t-.288.713T8 13m4 0q-.425 0-.712-.288T11 12t.288-.712T12 11t.713.288T13 12t-.288.713T12 13m4 0q-.425 0-.712-.288T15 12t.288-.712T16 11t.713.288T17 12t-.288.713T16 13m-4 4q-.425 0-.712-.288T11 16t.288-.712T12 15t.713.288T13 16t-.288.713T12 17m0-12q-.425 0-.712-.288T11 4t.288-.712T12 3t.713.288T13 4t-.288.713T12 5m0 16q-.425 0-.712-.288T11 20t.288-.712T12 19t.713.288T13 20t-.288.713T12 21"></svg:path>`,
})
export class MaterialSymbolsFitPageRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

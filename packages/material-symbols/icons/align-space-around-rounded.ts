import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAlignSpaceAroundRoundedIcon],svg[material-symbols-align-space-around-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 18q-.425 0-.712-.288T7 17v-1q0-.425.288-.712T8 15h8q.425 0 .713.288T17 16v1q0 .425-.288.713T16 18zm0-9q-.425 0-.712-.288T7 8V7q0-.425.288-.712T8 6h8q.425 0 .713.288T17 7v1q0 .425-.288.713T16 9zM3 22q-.425 0-.712-.288T2 21t.288-.712T3 20h18q.425 0 .713.288T22 21t-.288.713T21 22zM3 4q-.425 0-.712-.288T2 3t.288-.712T3 2h18q.425 0 .713.288T22 3t-.288.713T21 4z"></svg:path>`,
})
export class MaterialSymbolsAlignSpaceAroundRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsArrowTopRightRoundedIcon],svg[material-symbols-arrow-top-right-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.175 10H7v9q0 .425-.288.713T6 20t-.712-.288T5 19v-9q0-.825.588-1.412T7 8h9.175L13.3 5.125q-.3-.3-.312-.712t.287-.713t.713-.3t.712.3l4.6 4.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.625 4.625q-.3.3-.7.288t-.7-.313q-.275-.3-.288-.7t.288-.7z"></svg:path>`,
})
export class MaterialSymbolsArrowTopRightRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

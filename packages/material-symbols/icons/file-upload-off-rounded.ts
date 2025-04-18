import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFileUploadOffRoundedIcon],svg[material-symbols-file-upload-off-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 7.85v2.3l-2-2l-1.575-1.575L11.3 4.7q.15-.15.325-.213T12 4.426t.375.063t.325.212l3.6 3.6q.3.3.288.7t-.288.7q-.3.3-.712.313t-.713-.288zM11 11l2 2v2q0 .425-.288.713T12 16t-.712-.288T11 15zm6.15 9H6q-.825 0-1.412-.587T4 18v-2q0-.425.288-.712T5 15t.713.288T6 16v2h9.15L2.075 4.925q-.3-.3-.3-.712t.3-.713t.713-.3t.712.3l17 17q.3.3.3.7t-.3.7t-.712.3t-.713-.3zM20 17.15l-1.775-1.775q.125-.15.313-.263T19 15q.425 0 .713.288T20 16z"></svg:path>`,
})
export class MaterialSymbolsFileUploadOffRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

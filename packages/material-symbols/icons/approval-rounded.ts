import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsApprovalRoundedIcon],svg[material-symbols-approval-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20v-4q0-.825.588-1.412T6 14h12q.825 0 1.413.588T20 16v4q0 .825-.587 1.413T18 22zm1-4h10q.425 0 .713-.288T18 17t-.288-.712T17 16H7q-.425 0-.712.288T6 17t.288.713T7 18m4.175-5.15l-3.7-5.175q-.225-.325-.312-.712t-.038-.788q.3-1.825 1.65-3T12 2t3.225 1.175t1.65 3q.05.4-.038.788t-.312.712l-3.7 5.175q-.3.425-.825.425t-.825-.425"></svg:path>`,
})
export class MaterialSymbolsApprovalRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

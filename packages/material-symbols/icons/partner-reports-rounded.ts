import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPartnerReportsRoundedIcon],svg[material-symbols-partner-reports-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17q-.425 0-.712-.288T11 16t.288-.712T12 15t.713.288T13 16t-.288.713T12 17m0-4q-.425 0-.712-.288T11 12V4q0-.425.288-.712T12 3t.713.288T13 4v8q0 .425-.288.713T12 13m-7 8q-.825 0-1.412-.587T3 19v-2q0-.425.288-.712T4 16t.713.288T5 17v2h14v-2q0-.425.288-.712T20 16t.713.288T21 17v2q0 .825-.587 1.413T19 21z"></svg:path>`,
})
export class MaterialSymbolsPartnerReportsRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

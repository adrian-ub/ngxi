import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPartnerReportsIcon],svg[material-symbols-partner-reports-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17q-.425 0-.712-.288T11 16t.288-.712T12 15t.713.288T13 16t-.288.713T12 17m-1-4V3h2v10zm-6 8q-.825 0-1.412-.587T3 19v-3h2v3h14v-3h2v3q0 .825-.587 1.413T19 21z"></svg:path>`,
})
export class MaterialSymbolsPartnerReportsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

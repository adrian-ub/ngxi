import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCreditCardOffOutlineRoundedIcon],svg[material-symbols-credit-card-off-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.775 18.925L20 17.15V12h-5.15l-4-4H20V6H8.85l-2-2H20q.825 0 1.413.588T22 6v12q0 .25-.05.488t-.175.437M9.15 12H4v6h11.15zM4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4l2 2H4v2h1.15l-3.8-3.8q-.3-.3-.3-.712t.3-.713t.713-.3t.712.3l18.4 18.4q.3.3.3.7t-.3.7t-.712.3t-.713-.3L17.15 20z"></svg:path>`,
})
export class MaterialSymbolsCreditCardOffOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

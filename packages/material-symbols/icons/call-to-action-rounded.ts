import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCallToActionRoundedIcon],svg[material-symbols-call-to-action-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm3.5-3h9q.625 0 1.063-.437T18 15.5t-.437-1.062T16.5 14h-9q-.625 0-1.062.438T6 15.5t.438 1.063T7.5 17"></svg:path>`,
})
export class MaterialSymbolsCallToActionRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

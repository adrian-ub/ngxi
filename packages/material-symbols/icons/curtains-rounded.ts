import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCurtainsRoundedIcon],svg[material-symbols-curtains-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19V5q0-.825.588-1.412T6 3h12q.825 0 1.413.588T20 5v14h1q.425 0 .713.288T22 20t-.288.713T21 21H3q-.425 0-.712-.288T2 20t.288-.712T3 19zm4.225-7q1.7 1.125 2.625 3.075T11.95 19h.1q.175-1.975 1.1-3.925T15.775 12q-1.7-1.125-2.625-3.075T12.05 5h-.1q-.175 1.975-1.1 3.925T8.225 12"></svg:path>`,
})
export class MaterialSymbolsCurtainsRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

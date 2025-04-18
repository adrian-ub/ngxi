import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbols3gMobiledataRoundedIcon],svg[material-symbols-3g-mobiledata-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 17q-.425 0-.712-.288T3 16t.288-.712T4 15h4v-2H4q-.425 0-.712-.288T3 12t.288-.712T4 11h4V9H4q-.425 0-.712-.288T3 8t.288-.712T4 7h4q.825 0 1.413.588T10 9v1.5q0 .625-.437 1.063T8.5 12q.625 0 1.063.438T10 13.5V15q0 .825-.587 1.413T8 17zm10 0q-.825 0-1.412-.587T12 15V9q0-.825.588-1.412T14 7h6q.425 0 .713.288T21 8t-.288.713T20 9h-6v6h5v-2h-1.5q-.425 0-.712-.288T16.5 12t.288-.712T17.5 11H20q.425 0 .713.288T21 12v3q0 .825-.587 1.413T19 17z"></svg:path>`,
})
export class MaterialSymbols3gMobiledataRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

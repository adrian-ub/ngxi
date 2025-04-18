import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMarkAsUnreadOutlineRoundedIcon],svg[material-symbols-mark-as-unread-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 17q-.825 0-1.412-.587T2 15V7.15q0-.375.213-.737T2.8 5.85l6.8-3.4q.425-.2.9-.213t.9.213l6.65 3.4q.3.15.513.475T18.85 7h-2.925L10.5 4.25L4 7.475zm3 4q-.825 0-1.412-.587T5 19v-9q0-.825.588-1.412T7 8h13q.825 0 1.413.588T22 10v9q0 .825-.587 1.413T20 21zm5.575-6.125L7 12v7h13v-7l-5.575 2.875Q14 15.1 13.5 15.1t-.925-.225m.925-1.525L20 10H7zM20 10H7z"></svg:path>`,
})
export class MaterialSymbolsMarkAsUnreadOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

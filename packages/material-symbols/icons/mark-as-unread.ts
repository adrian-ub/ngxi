import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMarkAsUnreadIcon],svg[material-symbols-mark-as-unread-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 17q-.825 0-1.412-.587T2 15V7.15q0-.375.213-.737T2.8 5.85L10.5 2l7.55 3.85q.3.15.513.475T18.85 7h-2.925L10.5 4.25L4 7.475zm3 4q-.825 0-1.412-.587T5 19v-9q0-.825.588-1.412T7 8h13q.825 0 1.413.588T22 10v9q0 .825-.587 1.413T20 21zm6.5-5.65L20 12v-2l-6.5 3.35L7 10v2z"></svg:path>`,
})
export class MaterialSymbolsMarkAsUnreadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

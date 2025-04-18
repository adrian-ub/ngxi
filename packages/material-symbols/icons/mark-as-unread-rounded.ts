import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMarkAsUnreadRoundedIcon],svg[material-symbols-mark-as-unread-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 17q-.825 0-1.412-.587T2 15V7.15q0-.375.213-.737T2.8 5.85l6.8-3.4q.425-.2.9-.213t.9.213l6.65 3.4q.3.15.513.475T18.85 7h-2.925L10.5 4.25L4 7.475zm3 4q-.825 0-1.412-.587T5 19v-9q0-.825.588-1.412T7 8h13q.825 0 1.413.588T22 10v9q0 .825-.587 1.413T20 21zm6.5-5.9q.25 0 .488-.05t.437-.175l5.1-2.625q.225-.125.35-.338T20 11.45q0-.5-.425-.75t-.875-.025l-5.2 2.675l-5.2-2.675q-.45-.225-.875.025T7 11.45q0 .25.125.463t.35.337l5.1 2.625q.2.125.438.175t.487.05"></svg:path>`,
})
export class MaterialSymbolsMarkAsUnreadRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

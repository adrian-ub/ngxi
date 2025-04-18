import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewDayRoundedIcon],svg[material-symbols-view-day-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.975 20q-.425 0-.7-.288T3 19t.288-.712T4 18h16.025q.425 0 .7.288T21 19t-.288.713T20 20zM5 16q-.825 0-1.412-.587T3 14v-4q0-.825.588-1.412T5 8h14q.825 0 1.413.588T21 10v4q0 .825-.587 1.413T19 16zM3.975 6q-.425 0-.7-.288T3 5t.288-.712T4 4h16.025q.425 0 .7.288T21 5t-.288.713T20 6z"></svg:path>`,
})
export class MaterialSymbolsViewDayRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

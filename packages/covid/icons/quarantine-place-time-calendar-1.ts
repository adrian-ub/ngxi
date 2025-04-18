import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[covidQuarantinePlaceTimeCalendar1Icon],svg[covid-quarantine-place-time-calendar-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"><svg:path stroke-linecap="round" d="M17.25 20.643a3.429 3.429 0 1 0 0-6.858a3.429 3.429 0 0 0 0 6.858m-.571-9.429h1.142m-.571 0v2.572m3.839-1.218l.808.808m-.404-.404l-1.819 1.818m3.576 1.853v1.143m0-.572h-2.571m1.218 3.839l-.808.808m.404-.404l-1.819-1.818m-1.853 3.575h-1.142m.571 0v-2.571m-3.839 1.218l-.808-.808m.404.404l1.819-1.818m-3.576-1.853v-1.143m0 .571h2.571m-1.218-3.838l.808-.808m-.404.404l1.819 1.818m-6.861 3.049H2.3a1.553 1.553 0 0 1-1.55-1.551V3.889A1.55 1.55 0 0 1 2.3 2.337h13.977a1.55 1.55 0 0 1 1.552 1.552v4.364"></svg:path><svg:path d="M.757 6.992h17.079"></svg:path><svg:path stroke-linecap="round" d="M5.408 3.889V.786m7.763 3.103V.786"></svg:path></svg:g>`,
})
export class CovidQuarantinePlaceTimeCalendar1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

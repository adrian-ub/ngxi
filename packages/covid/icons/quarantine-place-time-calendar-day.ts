import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[covidQuarantinePlaceTimeCalendarDayIcon],svg[covid-quarantine-place-time-calendar-day-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"><svg:path stroke-linecap="round" d="M6.75 12.007h2v8m8.5-3h-5.5c0-3 4-5 4-5v8"></svg:path><svg:path stroke-linecap="round" d="M21.75 3.007H2.25a1.5 1.5 0 0 0-1.5 1.5v17a1.5 1.5 0 0 0 1.5 1.5h19.5a1.5 1.5 0 0 0 1.5-1.5v-17a1.5 1.5 0 0 0-1.5-1.5"></svg:path><svg:path d="M.75 8.507h22.5"></svg:path><svg:path stroke-linecap="round" d="M7.25 4.993v-4m9 4v-4"></svg:path></svg:g>`,
})
export class CovidQuarantinePlaceTimeCalendarDayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

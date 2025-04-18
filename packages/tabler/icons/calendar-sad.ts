import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCalendarSadIcon],svg[tabler-calendar-sad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm12-4v4M8 3v4m-4 4h16m-9.995 3h.01m3.99 0h.01"></svg:path><svg:path d="M10 18a3.5 3.5 0 0 1 4 0"></svg:path></svg:g>`,
})
export class TablerCalendarSadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

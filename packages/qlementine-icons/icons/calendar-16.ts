import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsCalendar16Icon],svg[qlementine-icons-calendar-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5zm0 3a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5zM7.5 7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m1 3h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5M10 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 0a.5.5 0 0 1 .5.5V1h6V.5a.5.5 0 0 1 1 0V1c1.66 0 3 1.34 3 3v8c0 1.66-1.34 3-3 3H4c-1.66 0-3-1.34-3-3V4c0-1.66 1.34-3 3-3V.5a.5.5 0 0 1 .5-.5M14 4v1H2V4c0-1.1.895-2 2-2v.5a.5.5 0 0 0 1 0V2h6v.5a.5.5 0 0 0 1 0V2c1.1 0 2 .895 2 2M2 12V6h12v6c0 1.1-.895 2-2 2H4c-1.1 0-2-.895-2-2" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsCalendar16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

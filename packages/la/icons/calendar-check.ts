import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laCalendarCheckIcon],svg[la-calendar-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 5v1H5v22h22V6h-4V5h-2v1H11V5zM7 8h2v1h2V8h10v1h2V8h2v2H7zm0 4h18v14H7zm13.281 2.281L15 19.562l-2.281-2.28l-1.438 1.437l3 3l.719.687l.719-.687l6-6z"></svg:path>`,
})
export class LaCalendarCheckIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

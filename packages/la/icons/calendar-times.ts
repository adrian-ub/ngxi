import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laCalendarTimesIcon],svg[la-calendar-times-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 5v1H5v22h22V6h-4V5h-2v1H11V5zM7 8h2v1h2V8h10v1h2V8h2v2H7zm0 4h18v14H7zm6.219 2.781L11.78 16.22L14.562 19l-2.78 2.781l1.437 1.438L16 20.437l2.781 2.782l1.438-1.438L17.437 19l2.782-2.781l-1.438-1.438L16 17.562z"></svg:path>`,
})
export class LaCalendarTimesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

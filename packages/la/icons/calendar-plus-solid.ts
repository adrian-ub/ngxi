import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laCalendarPlusSolidIcon],svg[la-calendar-plus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 5v1H5v22h22V6h-4V5h-2v1H11V5zM7 8h2v1h2V8h10v1h2V8h2v2H7zm0 4h18v14H7zm8 2v4h-4v2h4v4h2v-4h4v-2h-4v-4z"></svg:path>`,
})
export class LaCalendarPlusSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

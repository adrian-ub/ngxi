import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCellularDataCellularOff24FilledIcon],svg[fluent-cellular-data-cellular-off-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06L11 12.06V19a1 1 0 1 0 2 0v-4.94l2 2v2.945c0 .55.448.995 1 .995s1-.446 1-.995v-.944l3.72 3.72a.75.75 0 0 0 1.06-1.061L3.28 2.22z" fill="currentColor"></svg:path><svg:path d="M19 15.818l2 2V6a1 1 0 0 0-2 0v9.82z" fill="currentColor"></svg:path><svg:path d="M15 11.818l2 2V8.995A.998.998 0 0 0 16 8c-.552 0-1 .446-1 .995v2.823z" fill="currentColor"></svg:path><svg:path d="M8 14c.552 0 1 .445 1 .994v4.012A.997.997 0 0 1 8 20c-.552 0-1-.445-1-.994v-4.012c0-.549.448-.994 1-.994z" fill="currentColor"></svg:path><svg:path d="M4 17c.552 0 1 .44 1 .984v1.032A.992.992 0 0 1 4 20c-.552 0-1-.44-1-.984v-1.032A.992.992 0 0 1 4 17z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentCellularDataCellularOff24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

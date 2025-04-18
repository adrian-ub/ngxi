import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnCalendarOutlineIcon],svg[typcn-calendar-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 6.184V6a3 3 0 1 0-6 0h-2a3 3 0 1 0-6 0v.184A3 3 0 0 0 3 9v9c0 1.654 1.346 3 3 3h12c1.654 0 3-1.346 3-3V9a3 3 0 0 0-2-2.816M15 6a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0zM7 6a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0zm12 12c0 .551-.448 1-1 1H6c-.552 0-1-.449-1-1v-6h14zm0-7H5V9c0-.551.448-1 1-1a2 2 0 0 0 4 0h4a2 2 0 0 0 4 0c.552 0 1 .449 1 1z"></svg:path>`,
})
export class TypcnCalendarOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

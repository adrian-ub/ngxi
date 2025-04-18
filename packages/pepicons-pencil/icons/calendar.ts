import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilCalendarIcon],svg[pepicons-pencil-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M16.5 4.5h-13A.5.5 0 0 0 3 5v11a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5M4 15.5v-10h12v10z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M16.5 4.5h-13A.5.5 0 0 0 3 5v3a.5.5 0 0 0 .5.5h13A.5.5 0 0 0 17 8V5a.5.5 0 0 0-.5-.5M4 7.5v-2h12v2z" clip-rule="evenodd"></svg:path><svg:path d="M5.5 5.5h1A.5.5 0 0 0 7 5V4a.5.5 0 0 0-.5-.5h-1A.5.5 0 0 0 5 4v1a.5.5 0 0 0 .5.5m8 0h1A.5.5 0 0 0 15 5V4a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5m-7.5 6a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path></svg:g>`,
})
export class PepiconsPencilCalendarIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

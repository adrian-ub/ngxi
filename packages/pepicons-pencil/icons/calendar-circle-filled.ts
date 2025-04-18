import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilCalendarCircleFilledIcon],svg[pepicons-pencil-calendar-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilCalendarCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M19.5 7.5h-13A.5.5 0 0 0 6 8v11a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5M7 18.5v-10h12v10z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M19.5 7.5h-13A.5.5 0 0 0 6 8v3a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5M7 10.5v-2h12v2z" clip-rule="evenodd"></svg:path><svg:path d="M8.5 8.5h1A.5.5 0 0 0 10 8V7a.5.5 0 0 0-.5-.5h-1A.5.5 0 0 0 8 7v1a.5.5 0 0 0 .5.5m8 0h1A.5.5 0 0 0 18 8V7a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5m-7.5 6a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilCalendarCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilCalendarCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

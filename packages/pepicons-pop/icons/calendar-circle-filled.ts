import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCalendarCircleFilledIcon],svg[pepicons-pop-calendar-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopCalendarCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" transform="translate(3 3)"><svg:path fill-rule="evenodd" d="M3 4h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m1 4v8h12V8z" clip-rule="evenodd"></svg:path><svg:circle cx="6.5" cy="10.5" r="1.5"></svg:circle><svg:circle cx="5.5" cy="4.5" r="1.5"></svg:circle><svg:circle cx="14.5" cy="4.5" r="1.5"></svg:circle></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopCalendarCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopCalendarCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

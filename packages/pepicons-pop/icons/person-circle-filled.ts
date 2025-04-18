import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopPersonCircleFilledIcon],svg[pepicons-pop-person-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopPersonCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M9 9a4 4 0 1 0 8 0a4 4 0 0 0-8 0m6 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0" clip-rule="evenodd"></svg:path><svg:path d="M20 21a1 1 0 1 1-2 0v-2.5c0-2.494-2.206-4.5-4.984-4.5C10.23 14 8 16.013 8 18.5l.002 2.5a1 1 0 1 1-2 0L6 18.5c0-3.64 3.169-6.5 7.016-6.5C16.86 12 20 14.857 20 18.5z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopPersonCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopPersonCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

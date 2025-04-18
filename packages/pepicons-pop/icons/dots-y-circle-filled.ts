import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopDotsYCircleFilledIcon],svg[pepicons-pop-dots-y-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopDotsYCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" transform="translate(3 3)"><svg:circle cx="10" cy="15" r="2"></svg:circle><svg:circle cx="10" cy="10" r="2"></svg:circle><svg:circle cx="10" cy="5" r="2"></svg:circle></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopDotsYCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopDotsYCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

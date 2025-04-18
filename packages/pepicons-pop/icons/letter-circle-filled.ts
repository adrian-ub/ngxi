import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopLetterCircleFilledIcon],svg[pepicons-pop-letter-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopLetterCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M20 6.5H6a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1m-13 11v-9h12v9z"></svg:path><svg:path d="m20.648 8.261l-7.045 6a1 1 0 0 1-1.301-.004l-6.955-6C4.645 7.652 5.073 6.5 6 6.5h14c.93 0 1.356 1.158.648 1.761M8.69 8.5l4.27 3.683L17.282 8.5z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopLetterCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopLetterCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

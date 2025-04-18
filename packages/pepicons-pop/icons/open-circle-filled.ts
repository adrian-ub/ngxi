import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopOpenCircleFilledIcon],svg[pepicons-pop-open-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopOpenCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path d="M13.707 13.707a1 1 0 0 1-1.414-1.414l6-6a1 1 0 1 1 1.414 1.414z"></svg:path><svg:path d="M18 18v-3.5a1 1 0 1 1 2 0V19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h4.5a1 1 0 0 1 0 2H8v10zm2-7a1 1 0 1 1-2 0V7a1 1 0 1 1 2 0z"></svg:path><svg:path d="M15 8a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopOpenCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopOpenCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopScissorsCircleFilledIcon],svg[pepicons-pop-scissors-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopScissorsCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M5 8.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 0 0-7 0m5 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M5 17a3.5 3.5 0 1 0 7 0a3.5 3.5 0 0 0-7 0m5 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0" clip-rule="evenodd"></svg:path><svg:path d="M19.707 18.293a1 1 0 0 1-1.414 1.414l-8.5-8.5a1 1 0 0 1 1.414-1.414z"></svg:path><svg:path d="M9.793 14.293a1 1 0 1 0 1.414 1.414l8.5-8.5a1 1 0 0 0-1.414-1.414z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopScissorsCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopScissorsCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

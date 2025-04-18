import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopExclamationCircleFilledIcon],svg[pepicons-pop-exclamation-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopExclamationCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M13 5a2 2 0 0 1 2 2v7a2 2 0 1 1-4 0V7a2 2 0 0 1 2-2" clip-rule="evenodd"></svg:path><svg:path d="M15 19a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopExclamationCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopExclamationCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

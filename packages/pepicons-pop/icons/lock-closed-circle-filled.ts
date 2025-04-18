import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopLockClosedCircleFilledIcon],svg[pepicons-pop-lock-closed-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopLockClosedCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11 16a2 2 0 1 0 4 0a2 2 0 0 0-4 0m2.5 0a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0"></svg:path><svg:path d="M16 10h-6a4 4 0 0 0-4 4v4a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-4a4 4 0 0 0-4-4m-8 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2z"></svg:path><svg:path d="M17 7a4 4 0 0 0-8 0v5h8zm-2 0v3h-4V7a2 2 0 1 1 4 0"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopLockClosedCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopLockClosedCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

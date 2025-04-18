import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopAngleRightCircleFilledIcon],svg[pepicons-pop-angle-right-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopAngleRightCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path d="M14.732 12.36a1 1 0 1 1 1.536 1.28l-5 6a1 1 0 1 1-1.536-1.28z"></svg:path><svg:path d="M9.732 7.64a1 1 0 0 1 1.536-1.28l5 6a1 1 0 1 1-1.536 1.28z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopAngleRightCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopAngleRightCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

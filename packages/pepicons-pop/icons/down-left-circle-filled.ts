import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopDownLeftCircleFilledIcon],svg[pepicons-pop-down-left-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopDownLeftCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.707 19.707a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 1.414L7.414 15l3.293 3.293a1 1 0 0 1 0 1.414"></svg:path><svg:path d="M15.75 14c.595 0 1.166-.238 1.588-.663a2.28 2.28 0 0 0 .662-1.61V6a1 1 0 1 1 2 0v5.727a4.3 4.3 0 0 1-1.242 3.02A4.24 4.24 0 0 1 15.75 16H6a1 1 0 1 1 0-2z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopDownLeftCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopDownLeftCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

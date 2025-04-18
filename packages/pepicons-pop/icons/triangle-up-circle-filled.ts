import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopTriangleUpCircleFilledIcon],svg[pepicons-pop-triangle-up-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopTriangleUpCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M13 10.002L8.963 17h8.074zm.866-2.5a1 1 0 0 0-1.732 0L6.365 17.5a1 1 0 0 0 .866 1.5H18.77a1 1 0 0 0 .866-1.5z" clip-rule="evenodd"></svg:path></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopTriangleUpCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopTriangleUpCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

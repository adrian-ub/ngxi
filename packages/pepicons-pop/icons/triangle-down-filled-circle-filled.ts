import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopTriangleDownFilledCircleFilledIcon],svg[pepicons-pop-triangle-down-filled-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopTriangleDownFilledCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13.866 18.499a1 1 0 0 1-1.732 0l-5.769-10A1 1 0 0 1 7.231 7H18.77a1 1 0 0 1 .866 1.5z"></svg:path><svg:path d="M6.365 8.5A1 1 0 0 1 7.231 7H18.77a1 1 0 0 1 .866 1.5l-5.769 9.999a1 1 0 0 1-1.732 0zM13 13.997L15.306 10h-4.612z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopTriangleDownFilledCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopTriangleDownFilledCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

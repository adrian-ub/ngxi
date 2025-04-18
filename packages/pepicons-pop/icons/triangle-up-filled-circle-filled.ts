import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopTriangleUpFilledCircleFilledIcon],svg[pepicons-pop-triangle-up-filled-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopTriangleUpFilledCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12.134 7.501a1 1 0 0 1 1.732 0l5.769 10A1 1 0 0 1 18.769 19H7.23a1 1 0 0 1-.866-1.5z"></svg:path><svg:path d="M19.635 17.5a1 1 0 0 1-.866 1.5H7.23a1 1 0 0 1-.866-1.5l5.769-9.999a1 1 0 0 1 1.732 0zM13 12.003L10.694 16h4.612z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopTriangleUpFilledCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopTriangleUpFilledCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

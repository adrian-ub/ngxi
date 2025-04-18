import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopTriangleLeftFilledCircleFilledIcon],svg[pepicons-pop-triangle-left-filled-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopTriangleLeftFilledCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M7.501 13.866a1 1 0 0 1 0-1.732l10-5.769A1 1 0 0 1 19 7.231V18.77a1 1 0 0 1-1.5.866z"></svg:path><svg:path d="M17.5 6.365a1 1 0 0 1 1.5.866V18.77a1 1 0 0 1-1.5.866l-9.999-5.769a1 1 0 0 1 0-1.732zM12.003 13L16 15.306v-4.612z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopTriangleLeftFilledCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopTriangleLeftFilledCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

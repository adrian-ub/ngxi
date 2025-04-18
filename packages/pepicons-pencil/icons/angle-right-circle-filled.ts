import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilAngleRightCircleFilledIcon],svg[pepicons-pencil-angle-right-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilAngleRightCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path d="M10.116 7.32a.5.5 0 1 1 .768-.64l5 6a.5.5 0 0 1-.768.64z"></svg:path><svg:path d="M10.884 19.32a.5.5 0 0 1-.768-.64l5-6a.5.5 0 1 1 .768.64z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilAngleRightCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilAngleRightCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilTriangleLeftCircleFilledIcon],svg[pepicons-pencil-triangle-left-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilTriangleLeftCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M7 13a.5.5 0 0 1 .243-.429l10-6A.5.5 0 0 1 18 7v12a.5.5 0 0 1-.757.429l-10-6A.5.5 0 0 1 7 13m10 5.117V7.883L8.472 13z" clip-rule="evenodd"></svg:path></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilTriangleLeftCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilTriangleLeftCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilTriangleRightCircleFilledIcon],svg[pepicons-pencil-triangle-right-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilTriangleRightCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M19 13a.5.5 0 0 1-.243.429l-10 6A.5.5 0 0 1 8 19V7a.5.5 0 0 1 .757-.429l10 6A.5.5 0 0 1 19 13M9 7.883v10.234L17.528 13z" clip-rule="evenodd"></svg:path></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilTriangleRightCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilTriangleRightCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

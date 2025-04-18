import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilTriangleDownCircleFilledIcon],svg[pepicons-pencil-triangle-down-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilTriangleDownCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M13 19a.5.5 0 0 1-.429-.243l-6-10A.5.5 0 0 1 7 8h12a.5.5 0 0 1 .429.757l-6 10A.5.5 0 0 1 13 19m5.117-10H7.883L13 17.528z" clip-rule="evenodd"></svg:path></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilTriangleDownCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilTriangleDownCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

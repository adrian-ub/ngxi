import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilTriangleUpCircleFilledIcon],svg[pepicons-pencil-triangle-up-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilTriangleUpCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M13 7a.5.5 0 0 1 .429.243l6 10A.5.5 0 0 1 19 18H7a.5.5 0 0 1-.429-.757l6-10A.5.5 0 0 1 13 7M7.883 17h10.234L13 8.472z" clip-rule="evenodd"></svg:path></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilTriangleUpCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilTriangleUpCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

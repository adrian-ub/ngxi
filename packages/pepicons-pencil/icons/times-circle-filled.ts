import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilTimesCircleFilledIcon],svg[pepicons-pencil-times-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilTimesCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path d="M9.854 16.854a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708.708z"></svg:path><svg:path d="M9.146 9.854a.5.5 0 1 1 .708-.708l7 7a.5.5 0 0 1-.708.708z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilTimesCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilTimesCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

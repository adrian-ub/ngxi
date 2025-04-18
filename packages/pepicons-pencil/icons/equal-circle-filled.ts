import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilEqualCircleFilledIcon],svg[pepicons-pencil-equal-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilEqualCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M7.5 10a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H8a.5.5 0 0 1-.5-.5m0 6a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H8a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilEqualCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilEqualCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

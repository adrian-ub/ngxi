import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilArrowSpinCircleFilledIcon],svg[pepicons-pencil-arrow-spin-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilArrowSpinCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path d="M16.374 8.038a.5.5 0 0 1-.563.827A5 5 0 1 0 18 13a.5.5 0 0 1 1 0a6 6 0 1 1-2.626-4.962"></svg:path><svg:path d="M15.769 14.585a.5.5 0 1 1-.539-.842l3.482-2.227a.5.5 0 1 1 .539.842z"></svg:path><svg:path d="M20.947 15.114a.5.5 0 0 1-.913.407l-1.509-3.38a.5.5 0 1 1 .914-.408z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilArrowSpinCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilArrowSpinCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

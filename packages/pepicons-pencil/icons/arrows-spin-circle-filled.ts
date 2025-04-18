import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilArrowsSpinCircleFilledIcon],svg[pepicons-pencil-arrows-spin-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilArrowsSpinCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path d="M8.254 17.596a.5.5 0 0 1 .707-.707A5.5 5.5 0 0 0 18.35 13a.5.5 0 0 1 .999.001a6.5 6.5 0 0 1-11.096 4.596"></svg:path><svg:path d="M16.131 15.416a.5.5 0 0 1-.555-.832l3-2a.5.5 0 1 1 .555.832z"></svg:path><svg:path d="M21.266 15.723a.5.5 0 1 1-.832.554l-2-3a.5.5 0 0 1 .832-.554zm-3.912-7.518a.5.5 0 0 1-.708.707a5.5 5.5 0 0 0-9.389 3.89a.5.5 0 0 1-1-.001a6.5 6.5 0 0 1 11.097-4.596"></svg:path><svg:path d="M9.476 10.385a.5.5 0 0 1 .555.832l-3 2a.5.5 0 1 1-.555-.832z"></svg:path><svg:path d="M4.341 10.078a.5.5 0 1 1 .832-.554l2 3a.5.5 0 0 1-.832.554z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilArrowsSpinCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilArrowsSpinCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

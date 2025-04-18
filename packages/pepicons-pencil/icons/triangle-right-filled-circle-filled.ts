import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilTriangleRightFilledCircleFilledIcon],svg[pepicons-pencil-triangle-right-filled-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilTriangleRightFilledCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M18.499 12.134a1 1 0 0 1 0 1.732l-10 5.769A1 1 0 0 1 7 18.769V7.23a1 1 0 0 1 1.5-.866z"></svg:path><svg:path d="M8.5 19.635a1 1 0 0 1-1.5-.866V7.23a1 1 0 0 1 1.5-.866l9.999 5.769a1 1 0 0 1 0 1.732zM13.997 13L10 10.694v4.612z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilTriangleRightFilledCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilTriangleRightFilledCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

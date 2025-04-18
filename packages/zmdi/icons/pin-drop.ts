import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiPinDropIcon],svg[zmdi-pin-drop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M277 131q0 27-13 61t-32 63t-37.5 55t-31.5 40l-14 15q-5-5-13.5-15T105 311t-39-56.5t-31-62T21 131q0-53 37.5-90.5T149 3t90.5 37.5T277 131m-170-.5q0 17.5 12.5 30t30 12.5t30-12.5t12.5-30t-12.5-30t-30-12.5t-30 12.5t-12.5 30M0 387h299v42H0z"></svg:path>`,
})
export class ZmdiPinDropIcon {
  readonly viewBox = input("0 0 304 432")
  readonly width = input("0.71em")
  readonly height = input("1em")
}

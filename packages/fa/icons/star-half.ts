import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faStarHalfIcon],svg[fa-star-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 0v1339l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41"></svg:path>`,
})
export class FaStarHalfIcon {
  readonly viewBox = input("0 0 832 1600")
  readonly width = input("0.52em")
  readonly height = input("1em")
}

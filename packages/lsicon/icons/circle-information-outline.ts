import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconCircleInformationOutlineIcon],svg[lsicon-circle-information-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M7 7h1v4.5m0 0H6.5m1.5 0h1.5M8 4.75h.005v.005H8zm.25 0a.25.25 0 1 1-.5 0a.25.25 0 0 1 .5 0ZM14.5 8a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0Z"></svg:path>`,
})
export class LsiconCircleInformationOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

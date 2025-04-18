import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faStarIcon],svg[fa-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1664 615q0 22-26 48l-363 354l86 500q1 7 1 20q0 21-10.5 35.5T1321 1587q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46"></svg:path>`,
})
export class FaStarIcon {
  readonly viewBox = input("0 0 1664 1600")
  readonly width = input("1.04em")
  readonly height = input("1em")
}

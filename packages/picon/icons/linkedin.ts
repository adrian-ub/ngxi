import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconLinkedinIcon],svg[picon-linkedin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8V2h2v1q2-2 3 0v5H6V4L5 5v3M0 8V3h2v5M0 1l1-1l1 1l-1 1"></svg:path>`,
})
export class PiconLinkedinIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

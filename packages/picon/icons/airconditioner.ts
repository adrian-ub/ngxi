import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconAirconditionerIcon],svg[picon-airconditioner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h8v4H0m1-1h6V2H1m2 2v2c0 4-5 1-2 0v1h1V5m4 0L5 6c0 4 5 1 2 0v1H6"></svg:path>`,
})
export class PiconAirconditionerIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

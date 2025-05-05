import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconSpinnerIcon],svg[picon-spinner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 4c0-5.25 8-5.25 8 0S0 9.25 0 4c1 5 7 4 7 0S1 0 1 4"></svg:path>`,
})
export class PiconSpinnerIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

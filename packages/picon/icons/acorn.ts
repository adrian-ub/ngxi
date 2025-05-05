import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconAcornIcon],svg[picon-acorn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3q0 4-3.5 5Q0 7 0 3m0-2h3V0h1v1h3v1H0"></svg:path>`,
})
export class PiconAcornIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

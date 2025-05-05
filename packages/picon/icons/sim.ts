import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconSimIcon],svg[picon-sim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 8V0h4l3 3v5M3 3h3v3H3M2 5h5V4H2m0 3h1V2H2m4 5h1V2H6M4 7h1V2H4"></svg:path>`,
})
export class PiconSimIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

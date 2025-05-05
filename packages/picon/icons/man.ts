import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconManIcon],svg[picon-man-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2c-4 8 8 8 4 0M3 7C-7-2 15-2 5 7m0-4h1v1H5M2 3h1v1H2m1 1.5h2V6H3"></svg:path>`,
})
export class PiconManIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

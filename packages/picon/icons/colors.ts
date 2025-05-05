import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconColorsIcon],svg[picon-colors-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 5h8v3H0m5-8h3v4H5m1 3h1V6H6M2 4L0 2l2-2l2 2v2"></svg:path>`,
})
export class PiconColorsIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

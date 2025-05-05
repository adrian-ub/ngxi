import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconMilkIcon],svg[picon-milk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 0h4v1H5q0 2 3 2v1H7v4H1V4H0V3q3 0 3-2H2"></svg:path>`,
})
export class PiconMilkIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

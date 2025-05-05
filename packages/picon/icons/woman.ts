import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconWomanIcon],svg[picon-woman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2L2 3C1 7 7 7 6 3m1 4H1V3c0-4 6-4 6 0"></svg:path>`,
})
export class PiconWomanIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconAxeIcon],svg[picon-axe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1h1v7H3M2 2h3l1-1q2 2 0 4L5 4H2"></svg:path>`,
})
export class PiconAxeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

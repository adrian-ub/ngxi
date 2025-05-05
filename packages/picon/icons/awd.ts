import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconAwdIcon],svg[picon-awd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3h1V2h3l2 2h2v3H7L6 8L5 7H3L2 8L1 7V6H0m5-2L4 3v1M2 4h1V3H2"></svg:path>`,
})
export class PiconAwdIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

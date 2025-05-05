import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCliIcon],svg[picon-cli-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5v1h3V5M1 1l2 2.5L1 6h1l2-2.5L2 1M0 7V0h8v7"></svg:path>`,
})
export class PiconCliIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

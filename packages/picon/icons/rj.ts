import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconRjIcon],svg[picon-rj-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2h2l1-2h2l1 2h2v6H0m1.5-1H2V5h-.5m3 2H5V5h-.5M6 7h.5V5H6M3 7h.5V5H3"></svg:path>`,
})
export class PiconRjIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

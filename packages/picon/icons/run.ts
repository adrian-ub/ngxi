import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconRunIcon],svg[picon-run-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3L4 5h2v3H5V6H3v1H0V6h2l1-3H2v1H1V2h4l1-1l-1-1l-1 1l2 2h2v1H5"></svg:path>`,
})
export class PiconRunIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconExitIcon],svg[picon-exit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3L3 5h1v3H3V6H2v1H0V6h1l1-3H1L0 4V2h4l1-1l-1-1l-1 1l2 2h1v1H5m2-3H6L5 0h3v8H7"></svg:path>`,
})
export class PiconExitIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconOillampIcon],svg[picon-oillamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2h5L6 0H5m1 5h1V4H6m0-1c3 0 3 3 0 3l2 2H2l2-2l-4-3"></svg:path>`,
})
export class PiconOillampIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

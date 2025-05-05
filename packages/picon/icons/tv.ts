import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconTvIcon],svg[picon-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 0h1L4 2L2 0h1l1 1m3 4V2H1v3m1 2l1-1H0V1h8v5H5l1 1"></svg:path>`,
})
export class PiconTvIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

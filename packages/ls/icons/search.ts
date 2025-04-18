import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsSearchIcon],svg[ls-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m541 517l176 176l-72 73l-184-185c-45 25-97 39-151 39C139 620 0 481 0 310S139 0 310 0s311 139 311 310c0 80-31 153-80 207M103 310c0 115 92 207 207 207s207-92 207-207s-92-207-207-207s-207 92-207 207"></svg:path>`,
})
export class LsSearchIcon {
  readonly viewBox = input("0 0 717 766")
  readonly width = input("0.94em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciArrowSubLeftUpIcon],svg[ci-arrow-sub-left-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12.5 11.5l-5-5m0 0l-5 5m5-5v7.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218H20.5"></svg:path>`,
})
export class CiArrowSubLeftUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

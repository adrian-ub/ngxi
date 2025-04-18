import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciArrowSubRightUpIcon],svg[ci-arrow-sub-right-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m11 11l5-5m0 0l5 5m-5-5v7.803c0 1.118 0 1.677-.218 2.105a2 2 0 0 1-.874.874C14.48 17 13.92 17 12.803 17H3"></svg:path>`,
})
export class CiArrowSubRightUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

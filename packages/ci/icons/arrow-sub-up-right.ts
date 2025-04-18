import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciArrowSubUpRightIcon],svg[ci-arrow-sub-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 13l5-5m0 0l-5-5m5 5h-7.8c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C7 9.52 7 10.08 7 11.2V21"></svg:path>`,
})
export class CiArrowSubUpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

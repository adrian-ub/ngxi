import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciArrowUpSmIcon],svg[ci-arrow-up-sm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 17V7m0 0l-4 4m4-4l4 4"></svg:path>`,
})
export class CiArrowUpSmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

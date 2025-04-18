import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciArrowDownSmIcon],svg[ci-arrow-down-sm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 7v10m0 0l4-4m-4 4l-4-4"></svg:path>`,
})
export class CiArrowDownSmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

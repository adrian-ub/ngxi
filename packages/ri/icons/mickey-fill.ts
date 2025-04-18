import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMickeyFillIcon],svg[ri-mickey-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 2a4.5 4.5 0 0 1 .883 8.913a8 8 0 1 1-14.765-.001A4.499 4.499 0 0 1 5.5 2a4.5 4.5 0 0 1 4.493 4.254A8 8 0 0 1 12 6a8 8 0 0 1 2.006.254A4.5 4.5 0 0 1 18.5 2"></svg:path>`,
})
export class RiMickeyFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

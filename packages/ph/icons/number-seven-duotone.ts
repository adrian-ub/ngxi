import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNumberSevenDuotoneIcon],svg[ph-number-seven-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="m175.66 50.3l-48 160a8 8 0 0 1-15.32-4.6L157.25 56H88a8 8 0 0 1 0-16h80a8 8 0 0 1 7.66 10.3"></svg:path></svg:g>`,
})
export class PhNumberSevenDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

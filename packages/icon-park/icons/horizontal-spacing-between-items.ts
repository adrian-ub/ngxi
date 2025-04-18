import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkHorizontalSpacingBetweenItemsIcon],svg[icon-park-horizontal-spacing-between-items-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M6 40H12L12 8H6"></svg:path><svg:path d="M24 34V14"></svg:path><svg:path stroke-linejoin="round" d="M42 40H36V8H42"></svg:path></svg:g>`,
})
export class IconParkHorizontalSpacingBetweenItemsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineHorizontalSpacingBetweenItemsIcon],svg[icon-park-outline-horizontal-spacing-between-items-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M6 40h6V8H6"></svg:path><svg:path d="M24 34V14"></svg:path><svg:path stroke-linejoin="round" d="M42 40h-6V8h6"></svg:path></svg:g>`,
})
export class IconParkOutlineHorizontalSpacingBetweenItemsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

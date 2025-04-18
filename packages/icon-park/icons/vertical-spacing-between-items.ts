import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkVerticalSpacingBetweenItemsIcon],svg[icon-park-vertical-spacing-between-items-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M8 6V12H40V6"></svg:path><svg:path d="M14 24H34"></svg:path><svg:path stroke-linejoin="round" d="M8 42V36H40V42"></svg:path></svg:g>`,
})
export class IconParkVerticalSpacingBetweenItemsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineVerticalSpacingBetweenItemsIcon],svg[icon-park-outline-vertical-spacing-between-items-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M8 6v6h32V6"></svg:path><svg:path d="M14 24h20"></svg:path><svg:path stroke-linejoin="round" d="M8 42v-6h32v6"></svg:path></svg:g>`,
})
export class IconParkOutlineVerticalSpacingBetweenItemsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

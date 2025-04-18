import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineWatermelonOneIcon],svg[icon-park-outline-watermelon-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m24 4l17 29.92S36.046 38 24 38S7 33.92 7 33.92z"></svg:path><svg:circle cx="24" cy="17" r="2" fill="currentColor"></svg:circle><svg:circle cx="27" cy="23" r="2" fill="currentColor"></svg:circle><svg:circle cx="21" cy="23" r="2" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="4" d="M41 39.92S36.046 44 24 44S7 39.92 7 39.92"></svg:path></svg:g>`,
})
export class IconParkOutlineWatermelonOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

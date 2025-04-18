import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBottomBarOneIcon],svg[icon-park-outline-bottom-bar-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M13.777 20h4s7 7.28 7 14s-6 10-6 10h-6s-6-3.28-6-10s7-14 7-14m2-16c2.084 0 5 1.52 5 6s-3.333 10-3.333 10h-3.333s-3.334-5.52-3.334-10s2.917-6 5-6m16 16h4s7 7.28 7 14s-6 10-6 10h-6s-6-3.28-6-10s7-14 7-14m2-16c2.084 0 5 1.52 5 6s-3.333 10-3.333 10h-3.333s-3.334-5.52-3.334-10s2.917-6 5-6"></svg:path>`,
})
export class IconParkOutlineBottomBarOneIcon {
  readonly viewBox = input("0 0 49 48")
  readonly width = input("1.03em")
  readonly height = input("1em")
}

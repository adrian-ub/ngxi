import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineRockGestureIcon],svg[icon-park-outline-rock-gesture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M24 25V7.5c0-1.281.5-3.5 3-3.5s3 2.219 3 3.5V30l7-7c1.297-1.297 3.078-1.922 4.5-.5s1.594 2.906 0 4.5L35 33.5S29.094 44 26 44H13s-3 0-5-2s-2-4.5-2-4.5V12.781C6 12.062 6.5 10 9 10s3 2 3 2.781V25"></svg:path><svg:rect width="6" height="12" x="12" y="19" rx="3"></svg:rect><svg:rect width="6" height="12" x="18" y="19" rx="3"></svg:rect></svg:g>`,
})
export class IconParkOutlineRockGestureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineDashboardIcon],svg[icon-park-outline-dashboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M8.444 41.556A21.93 21.93 0 0 1 2 26C2 13.85 11.85 4 24 4s22 9.85 22 22a21.93 21.93 0 0 1-6.444 15.556"></svg:path><svg:path d="M14.1 35.9A13.96 13.96 0 0 1 10 26c0-7.732 6.268-14 14-14"></svg:path><svg:path stroke-linejoin="round" d="M24 26v-8"></svg:path></svg:g>`,
})
export class IconParkOutlineDashboardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineRadarThreeIcon],svg[icon-park-outline-radar-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 4v17"></svg:path><svg:path stroke-linecap="round" d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20s20-8.954 20-20c0-4.626-1.57-8.885-4.207-12.273"></svg:path><svg:path stroke-linecap="round" d="M24 13c-6.075 0-11 4.925-11 11s4.925 11 11 11s11-4.925 11-11c0-2.544-.864-4.887-2.314-6.75"></svg:path><svg:circle cx="24" cy="24" r="3"></svg:circle></svg:g>`,
})
export class IconParkOutlineRadarThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

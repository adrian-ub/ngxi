import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineShareSysIcon],svg[icon-park-outline-share-sys-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M10.365 41.632A19.95 19.95 0 0 1 4 27C4 15.954 12.954 7 24 7s20 8.954 20 20a19.95 19.95 0 0 1-6.365 14.632"></svg:path><svg:path d="M15.138 36.51A12.97 12.97 0 0 1 11 27c0-7.18 5.82-13 13-13s13 5.82 13 13a12.96 12.96 0 0 1-4.138 9.51"></svg:path><svg:path d="M19.91 31.39a6 6 0 1 1 8.18 0"></svg:path></svg:g>`,
})
export class IconParkOutlineShareSysIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

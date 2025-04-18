import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineFilePptIcon],svg[icon-park-outline-file-ppt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M25 41h13v-7M25 7h13v7M25 34.243V44l-15-5.381V34m15-20.027V4L10 9.381v4.592"></svg:path><svg:rect width="40" height="20" x="4" y="14" stroke-linejoin="round" rx="2"></svg:rect><svg:path d="M10 19v10m11-10v10"></svg:path><svg:path stroke-linejoin="round" d="M35 20v8m-3-8h6m-28-1h3a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3h-3m11-6h3a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3h-3"></svg:path></svg:g>`,
})
export class IconParkOutlineFilePptIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

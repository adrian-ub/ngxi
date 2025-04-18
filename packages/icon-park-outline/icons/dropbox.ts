import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineDropboxIcon],svg[icon-park-outline-dropbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="m24 10l-12 8l12 8l12-8z"></svg:path><svg:path d="m24 10l12 8l5-7l-11-7zm0 0l-12 8l-5-7l11-7zm19 12l-7-4l-12 8l7 5zM5 22l7-4l12 8l-7 5z"></svg:path><svg:path stroke-linecap="round" d="M36 28v9l-12 7l-12-7v-9"></svg:path></svg:g>`,
})
export class IconParkOutlineDropboxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

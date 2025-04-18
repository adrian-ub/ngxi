import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneDropboxIcon],svg[icon-park-twotone-dropbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTDropbox0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="m24 10l-12 8l12 8l12-8z"></svg:path><svg:path d="m24 10l12 8l5-7l-11-7zm0 0l-12 8l-5-7l11-7zm19 12l-7-4l-12 8l7 5zM5 22l7-4l12 8l-7 5z"></svg:path><svg:path stroke-linecap="round" d="M36 28v9l-12 7l-12-7v-9"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTDropbox0)"></svg:path>`,
})
export class IconParkTwotoneDropboxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

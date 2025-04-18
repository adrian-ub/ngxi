import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsBookmarksIcon],svg[pixelarticons-bookmarks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 18V2H7v2h12v14zM5 6H3v16h4v-2h2v-2h2v2h2v2h4V6zm8 14v-2h-2v-2H9v2H7v2H5V8h10v12z"></svg:path>`,
})
export class PixelarticonsBookmarksIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

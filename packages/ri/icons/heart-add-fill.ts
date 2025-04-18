import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riHeartAddFillIcon],svg[ri-heart-add-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 14v3h3v2h-3v3h-2v-3h-3v-2h3v-3zm1.243-9.243a6 6 0 0 1 .507 7.91a6 6 0 0 0-8.06 8.127l-.69.691l-8.479-8.492a6 6 0 0 1 8.48-8.464a6 6 0 0 1 8.242.228"></svg:path>`,
})
export class RiHeartAddFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

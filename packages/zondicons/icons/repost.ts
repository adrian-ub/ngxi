import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsRepostIcon],svg[zondicons-repost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4a2 2 0 0 0-2 2v6H0l4 4l4-4H5V6h7l2-2zm10 4h-3l4-4l4 4h-3v6a2 2 0 0 1-2 2H6l2-2h7z"></svg:path>`,
})
export class ZondiconsRepostIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

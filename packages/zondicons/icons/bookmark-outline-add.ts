import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsBookmarkOutlineAddIcon],svg[zondicons-bookmark-outline-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v18l-8-4l-8 4zm2 0v15l6-3l6 3V2zm5 5V5h2v2h2v2h-2v2H9V9H7V7z"></svg:path>`,
})
export class ZondiconsBookmarkOutlineAddIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

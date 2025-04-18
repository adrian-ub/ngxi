import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsZoomInIcon],svg[zondicons-zoom-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33l-1.42 1.42l-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12M7 7V5h2v2h2v2H9v2H7V9H5V7z"></svg:path>`,
})
export class ZondiconsZoomInIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

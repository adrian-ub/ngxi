import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsDownLightIcon],svg[lets-icons-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 20l-.354.354l.354.353l.354-.353zM6 3.5a.5.5 0 0 0 0 1zm2.646 11.854l5 5l.708-.708l-5-5zm5.708 5l5-5l-.708-.708l-5 5zM14.5 20V10h-1v10zM8 3.5H6v1h2zm6.5 6.5A6.5 6.5 0 0 0 8 3.5v1a5.5 5.5 0 0 1 5.5 5.5z"></svg:path>`,
})
export class LetsIconsDownLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

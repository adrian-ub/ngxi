import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowTopLightIcon],svg[lets-icons-arrow-top-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 4l-.354-.354l.354-.353l.354.353zm.5 15a.5.5 0 0 1-1 0zM5.646 9.646l6-6l.708.708l-6 6zm6.708-6l6 6l-.708.708l-6-6zM12.5 4v15h-1V4z"></svg:path>`,
})
export class LetsIconsArrowTopLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

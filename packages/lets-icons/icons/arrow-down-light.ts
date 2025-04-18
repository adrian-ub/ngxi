import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowDownLightIcon],svg[lets-icons-arrow-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 20l-.354.354l.354.353l.354-.353zm.5-15a.5.5 0 0 0-1 0zm-6.854 9.354l6 6l.708-.708l-6-6zm6.708 6l6-6l-.708-.708l-6 6zM12.5 20V5h-1v15z"></svg:path>`,
})
export class LetsIconsArrowDownLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

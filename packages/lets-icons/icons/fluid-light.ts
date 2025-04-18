import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsFluidLightIcon],svg[lets-icons-fluid-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 3l-.354-.354l.354-.353l.354.353zm.5 11a.5.5 0 0 1-1 0zM6.646 7.646l5-5l.708.708l-5 5zm5.708-5l5 5l-.708.708l-5-5zM12.5 3v11h-1V3z"></svg:path><svg:path fill="currentColor" d="m12 21l-.354.354l.354.353l.354-.353zm.5-7a.5.5 0 0 0-1 0zm-5.854 2.354l5 5l.708-.708l-5-5zm5.708 5l5-5l-.708-.708l-5 5zM12.5 21v-7h-1v7z"></svg:path>`,
})
export class LetsIconsFluidLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsCollapseLightIcon],svg[lets-icons-collapse-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 13l-.354-.354l.354-.353l.354.353zm.5 9a.5.5 0 0 1-1 0zm-5.854-4.354l5-5l.708.708l-5 5zm5.708-5l5 5l-.708.708l-5-5zM9.5 13v9h-1v-9zm5.5-2l-.354.354l.354.353l.354-.353zm.5-9a.5.5 0 0 0-1 0zM9.646 6.354l5 5l.708-.708l-5-5zm5.708 5l5-5l-.708-.708l-5 5zM15.5 11V2h-1v9z"></svg:path>`,
})
export class LetsIconsCollapseLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

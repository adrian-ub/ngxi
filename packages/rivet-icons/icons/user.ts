import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsUserIcon],svg[rivet-icons-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0a4 4 0 1 0 0 8a4 4 0 0 0 0-8M6 4a2 2 0 1 1 4 0a2 2 0 0 1-4 0m0 5a3 3 0 0 0-3 3v4h10v-4a3 3 0 0 0-3-3zm-1 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2H5z"></svg:path>`,
})
export class RivetIconsUserIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

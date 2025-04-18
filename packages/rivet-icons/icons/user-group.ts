import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsUserGroupIcon],svg[rivet-icons-user-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 0a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-1 3a1 1 0 1 1 2 0a1 1 0 0 1-2 0M5 3a3 3 0 1 0 0 6a3 3 0 0 0 0-6M4 6a1 1 0 1 1 2 0a1 1 0 0 1-2 0m-4 7a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v3H0zm3-1a1 1 0 0 0-1 1v1h6v-1a1 1 0 0 0-1-1zm6-5v2h4a1 1 0 0 1 1 1v1h-3v2h5v-3a3 3 0 0 0-3-3z"></svg:path>`,
})
export class RivetIconsUserGroupIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

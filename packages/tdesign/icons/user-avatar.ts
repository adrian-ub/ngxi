import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignUserAvatarIcon],svg[tdesign-user-avatar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm17.5 18h.5V4H4v16h.5a5 5 0 0 1 5-5h5a5 5 0 0 1 5 5M12 7a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M7.5 9.5a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0m2 7.5a3 3 0 0 0-3 3h11a3 3 0 0 0-3-3z"></svg:path>`,
})
export class TdesignUserAvatarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

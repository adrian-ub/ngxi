import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsTimeAtackDuotoneIcon],svg[lets-icons-time-atack-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="9" fill="currentColor" fill-opacity=".25"></svg:circle><svg:path fill="currentColor" d="M12 5.3c0-.143 0-.214.046-.258s.116-.042.254-.036a7 7 0 1 1-6.207 10.75c-.074-.116-.111-.175-.096-.237s.077-.098.2-.169l5.653-3.263c.073-.043.11-.064.13-.099c.02-.034.02-.077.02-.161z"></svg:path>`,
})
export class LetsIconsTimeAtackDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

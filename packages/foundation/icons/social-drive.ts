import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[foundationSocialDriveIcon],svg[foundation-social-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M40.588 59.659L27.579 82.03h46.912L87.5 59.659zm45.364-1.28L62.496 17.753l-25.879-.081L60.073 58.3zm-49.996-39.13L12.5 59.876l12.87 22.452l23.456-40.627z"></svg:path>`,
})
export class FoundationSocialDriveIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceParkIcon],svg[guidance-park-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M12 19.56v4.38M4.5 12.56h3.724A33.3 33.3 0 0 1 1.5 19.31v.25h21v-.25a33.3 33.3 0 0 1-6.724-6.75H19.5v-.25l-1.386-1.04A15.38 15.38 0 0 1 12 .06a15.38 15.38 0 0 1-6.114 11.21L4.5 12.31z"></svg:path>`,
})
export class GuidanceParkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

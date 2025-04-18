import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riTentLineIcon],svg[ri-tent-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.103 19L12.866 3a1 1 0 0 0-1.732 0L1.896 19H1v2h22v-2zM7.6 19H4.206L12 5.5L19.794 19H16.4L12 11zm4.4-3.85L14.117 19H9.884z"></svg:path>`,
})
export class RiTentLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

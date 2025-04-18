import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimPagerdutyIcon],svg[uim-pagerduty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 16.673h2.93V22H6zM17.034 2.977C15.46 2.139 14.37 2 11.796 2H6v12.124h5.77c2.296 0 4.008-.14 5.517-1.141a5.77 5.77 0 0 0 2.499-4.997a5.49 5.49 0 0 0-2.752-5.01m-4.591 8.61H8.93V4.6l3.31-.026c3.018-.038 4.527 1.028 4.527 3.437c0 2.588-1.864 3.577-4.324 3.577"></svg:path>`,
})
export class UimPagerdutyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeBitbucketIcon],svg[material-icon-theme-bitbucket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="materialIconThemeBitbucket0" x1="64.01" x2="32.99" y1="65.26" y2="89.48" gradientUnits="userSpaceOnUse"><svg:stop offset=".18" stop-color="#1565c0"></svg:stop><svg:stop offset="1" stop-color="#1e88e5"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="#1e88e5" d="M2.985 3.333a.618.618 0 0 0-.617.716l2.621 15.914a.84.84 0 0 0 .822.701h12.576a.62.62 0 0 0 .618-.519l2.627-16.09a.618.618 0 0 0-.617-.716zm11.039 11.501H10.01L8.923 9.16h6.074z"></svg:path><svg:path fill="url(#materialIconThemeBitbucket0)" d="M59.67 60.12H40.9L37.75 78.5h-13L9.4 96.73a2.7 2.7 0 0 0 1.75.66h40.74a2 2 0 0 0 2-1.68z" transform="translate(2.368 -9.404)scale(.30877)"></svg:path>`,
})
export class MaterialIconThemeBitbucketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

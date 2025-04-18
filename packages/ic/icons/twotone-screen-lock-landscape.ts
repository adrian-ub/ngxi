import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneScreenLockLandscapeIcon],svg[ic-twotone-screen-lock-landscape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.2 10c0-.66-.54-1.2-1.2-1.2s-1.2.54-1.2 1.2v1h2.4zM5 17h14V7H5zm4-5c0-.55.45-1 1-1v-1a2 2 0 1 1 4 0v1c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M10 16h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1v-1a2 2 0 1 0-4 0v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1m.8-6c0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2v1h-2.4zM21 5H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m-2 12H5V7h14z"></svg:path>`,
})
export class IcTwotoneScreenLockLandscapeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

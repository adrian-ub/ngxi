import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riUserCommunityFillIcon],svg[ri-user-community-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.234 7.73A8 8 0 0 1 12 4a8 8 0 0 1 6.767 3.73l1.69-1.07A10 10 0 0 0 12 2a10 10 0 0 0-8.456 4.66zM12 20a8 8 0 0 1-6.766-3.73l-1.69 1.07A10 10 0 0 0 12 22a10 10 0 0 0 8.457-4.66l-1.69-1.07A8 8 0 0 1 12 20m0-8a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 1a4 4 0 0 1 4 4H8a4 4 0 0 1 4-4m-6-1a3 3 0 1 1-6 0a3 3 0 0 1 6 0m15 3a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path>`,
})
export class RiUserCommunityFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

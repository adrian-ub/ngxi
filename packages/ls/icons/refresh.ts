import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsRefreshIcon],svg[ls-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M536.25 399h94c0 82-31 165-92 226c-123 123-323 123-446 0s-123-323 0-446c56-56 129-86 203-91V0l241 139l-241 140v-97c-50 4-98 26-136 64c-87 86-87 226 0 312c86 87 226 87 312 0c44-43 66-102 65-159"></svg:path>`,
})
export class LsRefreshIcon {
  readonly viewBox = input("0 0 631 718")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

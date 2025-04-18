import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsUserAccountIcon],svg[bxs-user-account-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-6 2.5a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5M19 15H9v-.25C9 12.901 11.254 11 14 11s5 1.901 5 3.75z"></svg:path><svg:path fill="currentColor" d="M4 8H2v12c0 1.103.897 2 2 2h12v-2H4z"></svg:path>`,
})
export class BxsUserAccountIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

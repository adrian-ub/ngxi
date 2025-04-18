import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkLogoutIcon],svg[nrk-logout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M3 3h11v4h-2V5H5v14h7v-2h2v4H3z"></svg:path><svg:path d="M19.87 7h-2.4l2.66 4H9v2h11.13l-2.67 4h2.4l3.34-5z"></svg:path></svg:g>`,
})
export class NrkLogoutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAppVerifierIcon],svg[arcticons-app-verifier-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m41.534 12.128l-7.358-.574l-2.257-7.346L24 8.163l-7.92-3.954l-2.256 7.346l-7.358.574l1.696 7.345L2.5 24l5.662 4.527l-1.696 7.345l7.358.574l2.257 7.346L24 39.838l7.92 3.953l2.256-7.345l7.358-.574l-1.696-7.345L45.5 24l-5.662-4.527z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.746 17.927L20.327 30.073l-6.073-6.709"></svg:path>`,
})
export class ArcticonsAppVerifierIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

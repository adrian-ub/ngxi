import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAppListIcon],svg[arcticons-app-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 4.5v28.363m-8.932-8.779L24 32.863l8.932-8.78m-5.687 16.228c0 1.761-1.453 3.189-3.245 3.189h0c-1.792 0-3.244-1.428-3.244-3.189h0c0-1.761 1.452-3.189 3.244-3.189s3.245 1.428 3.245 3.19"></svg:path>`,
})
export class ArcticonsAppListIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

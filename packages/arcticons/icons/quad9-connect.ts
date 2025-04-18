import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsQuad9ConnectIcon],svg[arcticons-quad9-connect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.258 37V24L24 17.5L12.742 24v13L24 43.5zm0-13L12.742 37m0-13l22.516 13M24 43.5v-26"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.258 24V11L24 4.5L12.742 11v13L24 17.5zM24 17.5v-13m0 13L12.742 11m22.516 0L24 17.5"></svg:path>`,
})
export class ArcticonsQuad9ConnectIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

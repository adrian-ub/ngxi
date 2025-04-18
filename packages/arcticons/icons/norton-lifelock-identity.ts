import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNortonLifelockIdentityIcon],svg[arcticons-norton-lifelock-identity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.25 28.875h3.25V43.5h4.875v-9.75h3.25v9.75H30.5V28.875h3.25v-16.25h-19.5zm4.209-18.946c0-2.999 2.462-5.429 5.5-5.429h0c3.038 0 5.5 2.43 5.5 5.429h0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 17.355a2 2 0 0 0-.812 3.826v2.963h1.625v-2.963A2 2 0 0 0 24 17.355"></svg:path>`,
})
export class ArcticonsNortonLifelockIdentityIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

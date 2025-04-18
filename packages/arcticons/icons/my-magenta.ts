import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMyMagentaIcon],svg[arcticons-my-magenta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 28.696v-9.402l4.706 9.412l4.707-9.398v9.398m2.174-3.882c0-1.3 1.054-2.354 2.353-2.354h0c1.3 0 2.353 1.054 2.353 2.354v3.882m-4.706-6.236v6.236m4.707-3.882c0-1.3 1.053-2.354 2.353-2.354h0c1.3 0 2.353 1.054 2.353 2.354v3.882"></svg:path>`,
})
export class ArcticonsMyMagentaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

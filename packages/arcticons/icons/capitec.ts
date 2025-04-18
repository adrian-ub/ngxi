import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCapitecIcon],svg[arcticons-capitec-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.163 24h-6.422a4 4 0 0 1-4-4v-6.24c-5.959 0-10.729 5.088-10.201 11.157c.464 5.343 5.176 9.323 10.54 9.323h14.083V28a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.837 24h6.422a4 4 0 0 1 4 4v6.24c5.959 0 10.729-5.088 10.201-11.157c-.464-5.343-5.176-9.324-10.54-9.324H18.837V20a4 4 0 0 0 4 4"></svg:path>`,
})
export class ArcticonsCapitecIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

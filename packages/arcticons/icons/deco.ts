import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDecoIcon],svg[arcticons-deco-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 2h-.1l.1 21.14a1.13 1.13 0 0 1 0 2.26h0a1.14 1.14 0 0 1-1.14-1.13h0a1.14 1.14 0 0 1 .89-1.11L19.57 2.48A21.87 21.87 0 1 0 24 2"></svg:path>`,
})
export class ArcticonsDecoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

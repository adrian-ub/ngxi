import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPrivyIcon],svg[arcticons-privy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m8.16 32.837l17.67-17.671c4.88-4.88 12.791-4.88 17.671-.002l-17.67 17.671c-4.88 4.88-12.792 4.881-17.672.001s-4.88-12.793 0-17.672s12.792-4.88 17.672 0"></svg:path>`,
})
export class ArcticonsPrivyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

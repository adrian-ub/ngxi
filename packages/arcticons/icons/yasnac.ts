import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsYasnacIcon],svg[arcticons-yasnac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m31.296 18.865l-9.403 9.404l-5.196-5.304"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.381 24.026V10.365L24 4.5l15.619 5.865v13.66C39.14 33.028 32.03 41.566 24 43.5C15.969 41.565 8.86 33.027 8.381 24.026"></svg:path>`,
})
export class ArcticonsYasnacIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

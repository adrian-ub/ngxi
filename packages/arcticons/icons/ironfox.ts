import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsIronfoxIcon],svg[arcticons-ironfox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.582 5.612L5.5 14.806c.118 13.791 8.084 20.855 18.276 27.582c11.773-7.4 18.612-13.23 18.724-27.582l-9.53-9.194v9.194H14.582z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.582 24.336c.957 1.828 3.33 6.773 5.673 3.364zm18.612 0c-.958 1.828-3.33 6.773-5.673 3.364z"></svg:path>`,
})
export class ArcticonsIronfoxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

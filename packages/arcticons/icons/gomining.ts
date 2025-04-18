import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGominingIcon],svg[arcticons-gomining-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m44.885 16.833l-6.767 7.17l6.765 7.171A21.5 21.5 0 0 1 24.615 45.5c-11.874 0-21.5-9.626-21.5-21.5s9.626-21.5 21.5-21.5A21.5 21.5 0 0 1 44.06 14.83"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m34.761 16.833l-6.767 7.17l6.765 7.171"></svg:path>`,
})
export class ArcticonsGominingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsChaseIcon],svg[arcticons-chase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.5 30.82l10.27 11.07a1.9 1.9 0 0 0 1.39.61h13.66V30.82ZM17.18 5.5L6.11 15.77a1.9 1.9 0 0 0-.61 1.39v13.66h11.68ZM42.5 17.18L32.23 6.11a1.9 1.9 0 0 0-1.39-.61H17.18v11.68ZM30.82 42.5l11.07-10.27a1.9 1.9 0 0 0 .61-1.39V17.18H30.82Z"></svg:path>`,
})
export class ArcticonsChaseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

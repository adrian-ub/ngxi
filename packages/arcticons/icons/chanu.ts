import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsChanuIcon],svg[arcticons-chanu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.75 24A9.25 9.25 0 1 1 24 14.75V24ZM24 14.75A9.25 9.25 0 1 1 33.25 24H24ZM33.25 24A9.25 9.25 0 1 1 24 33.25V24ZM24 33.25A9.25 9.25 0 1 1 14.75 24H24Z"></svg:path>`,
})
export class ArcticonsChanuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

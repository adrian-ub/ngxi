import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons9gagIcon],svg[arcticons-9gag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.93 14.25L24 24L7.07 14.25"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.07 14.25L24 4.5l16.93 9.75v19.5L24 43.5L7.07 33.75"></svg:path>`,
})
export class Arcticons9gagIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

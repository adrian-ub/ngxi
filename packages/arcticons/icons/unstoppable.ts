import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsUnstoppableIcon],svg[arcticons-unstoppable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.905 23.711a10.095 10.095 0 0 0 20.19 0v0l-.001-18.694a21.5 21.5 0 1 1-20.188 0h0z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.7 5.017v19.231h0a1.7 1.7 0 0 1-3.4 0h0V5.017"></svg:path>`,
})
export class ArcticonsUnstoppableIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

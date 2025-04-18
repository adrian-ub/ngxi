import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWanderlogIcon],svg[arcticons-wanderlog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.681 26.57a6.68 6.68 0 1 1-6.68 6.68a6.68 6.68 0 1 1-6.68-6.68"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.291 10.78a9.25 9.25 0 1 0-6.54 15.79h18.5A9.25 9.25 0 1 0 24 17.32v15.931"></svg:path>`,
})
export class ArcticonsWanderlogIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

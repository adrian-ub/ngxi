import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNextPlayerIcon],svg[arcticons-next-player-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.915 22.987L12.931 6.831a1.17 1.17 0 0 0-1.754 1.012v32.314c0 .9.975 1.462 1.754 1.012l27.984-16.156a1.17 1.17 0 0 0 0-2.026M11.177 8.518L8.254 6.831A1.17 1.17 0 0 0 6.5 7.843v32.314c0 .9.974 1.462 1.754 1.012l2.923-1.687"></svg:path>`,
})
export class ArcticonsNextPlayerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBeeperIcon],svg[arcticons-beeper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.617 24.197a10.05 10.05 0 0 1 6.126 9.254c0 5.55-4.499 10.049-10.048 10.049H13.649V22.3"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.119 36.695L35.933 20.88A9.596 9.596 0 0 0 29.148 4.5H18.852a9.596 9.596 0 0 0 0 19.19h3.871z"></svg:path>`,
})
export class ArcticonsBeeperIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

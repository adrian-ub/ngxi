import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBetterOpenWithIcon],svg[arcticons-better-open-with-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32 32v7.5a3 3 0 0 1-3 3H10.5a5 5 0 0 1-5-5V19a3 3 0 0 1 3-3H16"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 10.5a5 5 0 0 0-5-5H16l8.3 8.3l-8.185 8.185a2.435 2.435 0 0 0 0 3.444l6.456 6.456c.951.95 2.493.95 3.444 0L34.2 23.7l8.3 8.3z"></svg:path>`,
})
export class ArcticonsBetterOpenWithIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

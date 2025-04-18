import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGoustoIcon],svg[arcticons-gousto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:ellipse cx="24" cy="20.203" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="8.561" ry="8.594"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.561 28.796a8.6 8.6 0 0 1-4.28 7.442a8.53 8.53 0 0 1-8.561 0a8.6 8.6 0 0 1-4.281-7.442M33.556 10.61l-3.503 3.516"></svg:path>`,
})
export class ArcticonsGoustoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

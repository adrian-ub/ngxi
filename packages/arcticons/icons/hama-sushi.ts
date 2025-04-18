import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHamaSushiIcon],svg[arcticons-hama-sushi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.906 14.645c-4.339 4.314-4.027 32.723 2.575 13.805m1.986-7.209c-1.907-1.901 7.104-3.804 12.804-3.957"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.981 12.99c-2.284 3.945 2.716 20.667-3.98 20.543c-4.323-.08-5.707-4.039-2.391-5.518c2.591-1.156 7.743-1.656 12.372 6.962"></svg:path>`,
})
export class ArcticonsHamaSushiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

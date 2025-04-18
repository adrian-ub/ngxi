import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTabletIcon],svg[arcticons-tablet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24.75 40.97a.75.75 0 1 1-.75-.75a.75.75 0 0 1 .75.751"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 8.903h23v30h-23z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.124 4.501h21.752a3.345 3.345 0 0 1 3.352 3.338v32.309a3.345 3.345 0 0 1-3.337 3.353H13.124a3.345 3.345 0 0 1-3.352-3.338V7.853A3.345 3.345 0 0 1 13.109 4.5z"></svg:path>`,
})
export class ArcticonsTabletIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

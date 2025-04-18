import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRoll20Icon],svg[arcticons-roll20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.652 34.75v-21.5L24 2.5L5.348 13.25v21.5L24 45.5z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m36.312 32.453l6.34-19.203L24 10.585L5.348 13.25l6.34 19.203L24 45.5z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.312 32.453H11.688L24 10.585zM24 10.585V2.5m12.312 29.953l6.34 2.297m-30.964-2.297l-6.34 2.297"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.643 25.035c0 .827.643 1.47 1.47 1.47s1.47-.643 1.47-1.47v-1.47c0-.827-.643-1.47-1.47-1.47c-.735 0-1.47.643-1.47 1.47zm-4.226-1.47c0-.827.643-1.47 1.47-1.47s1.47.643 1.47 1.47c0 .367-.184.734-.46 1.01c-.643.46-2.48 1.93-2.48 1.93h2.94"></svg:path>`,
})
export class ArcticonsRoll20Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

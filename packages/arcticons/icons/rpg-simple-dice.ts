import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRpgSimpleDiceIcon],svg[arcticons-rpg-simple-dice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.65 34.75v-21.5L24 2.5L5.35 13.25v21.5L24 45.5z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m36.31 32.45l6.34-19.2L24 10.59L5.35 13.25l6.34 19.2L24 45.5z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.31 32.45H11.69L24 10.59zM24 10.59V2.5m12.31 29.95l6.34 2.3m-30.96-2.3l-6.34 2.3"></svg:path>`,
})
export class ArcticonsRpgSimpleDiceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiGoogleIcon],svg[zmdi-google-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M214 186v-1h201q3 12 3 36q0 93-56.5 150.5T213 429q-88 0-150.5-62T0 216T62 65T213 3q87 0 144 57l-57 56q-33-33-86-33q-54 0-92.5 39.5t-38.5 95t38.5 94.5t92.5 39q31 0 55-9.5t37.5-24.5t20.5-29.5t10-27.5H214z"></svg:path>`,
})
export class ZmdiGoogleIcon {
  readonly viewBox = input("0 0 424 432")
  readonly width = input("0.99em")
  readonly height = input("1em")
}

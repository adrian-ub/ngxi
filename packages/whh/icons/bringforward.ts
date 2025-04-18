import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhBringforwardIcon],svg[whh-bringforward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.488 1024h-512q-27 0-45.5-18.5t-18.5-45.5V704h64v256h512V448h-256v-64h256q27 0 45.5 18.5t18.5 45.5v512q0 27-18.5 45.5t-45.5 18.5m-384-384h-512q-27 0-45.5-18.5T.488 576V64q0-27 18.5-45.5T64.488 0h512q27 0 45.5 18.5t18.5 45.5v512q0 27-18.5 45.5t-45.5 18.5"></svg:path>`,
})
export class WhhBringforwardIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

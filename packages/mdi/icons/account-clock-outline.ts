import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAccountClockOutlineIcon],svg[mdi-account-clock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 14h1.5v2.82l2.44 1.41l-.75 1.3L16 17.69zm1-2a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5m0-2a7 7 0 0 1 7 7a7 7 0 0 1-7 7c-2.79 0-5.2-1.64-6.33-4H1v-3c0-2.66 5.33-4 8-4c.6 0 1.34.07 2.12.2A6.99 6.99 0 0 1 17 10m-7 7c0-.7.1-1.38.29-2c-.42-.07-.86-.1-1.29-.1c-2.97 0-6.1 1.46-6.1 2.1v1.1h7.19A7 7 0 0 1 10 17M9 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 1.9A2.1 2.1 0 0 0 6.9 8A2.1 2.1 0 0 0 9 10.1A2.1 2.1 0 0 0 11.1 8A2.1 2.1 0 0 0 9 5.9"></svg:path>`,
})
export class MdiAccountClockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

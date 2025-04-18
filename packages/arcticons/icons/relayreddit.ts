import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRelayredditIcon],svg[arcticons-relayreddit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.46 13.977a5.084 5.084 0 1 1 0 10.169m0-10.169H4.59m33.87 10.169H9.657m33.901 9.831s-11.172-9.828-19.854-9.828M4.558 33.966V29.23a5.09 5.09 0 0 1 5.1-5.084"></svg:path>`,
})
export class ArcticonsRelayredditIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

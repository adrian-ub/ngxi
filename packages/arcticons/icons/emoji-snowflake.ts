import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiSnowflakeIcon],svg[arcticons-emoji-snowflake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 5.5v37M8.206 33.252l31.588-18.504m0 18.504L8.206 14.747m6.254 3.665v-7.17m3.135-1.462L24 12.81m-9.54 5.602l-6.405 3.03M30.406 9.78L24 12.81m-6.405 25.358L24 35.138m6.406 3.03L24 35.138m-9.518-5.561l-6.405-3.03m31.868-5.105l-6.405-3.03m6.385 8.135l-6.406 3.03m.001 7.171v-7.171m-19.038 7.171v-7.171M33.54 18.412v-7.17"></svg:path>`,
})
export class ArcticonsEmojiSnowflakeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

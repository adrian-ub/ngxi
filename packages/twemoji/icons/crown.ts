import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiCrownIcon],svg[twemoji-crown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#F4900C" d="M14.174 17.075L6.75 7.594l-3.722 9.481z"></svg:path><svg:path fill="#F4900C" d="m17.938 5.534l-6.563 12.389H24.5z"></svg:path><svg:path fill="#F4900C" d="m21.826 17.075l7.424-9.481l3.722 9.481z"></svg:path><svg:path fill="#FFCC4D" d="M28.669 15.19L23.887 3.523l-5.88 11.668l-.007.003l-.007-.004l-5.88-11.668L7.331 15.19C4.197 10.833 1.28 8.042 1.28 8.042S3 20.75 3 33h30c0-12.25 1.72-24.958 1.72-24.958s-2.917 2.791-6.051 7.148"></svg:path><svg:circle cx="17.957" cy="22" r="3.688" fill="#5C913B"></svg:circle><svg:circle cx="26.463" cy="22" r="2.412" fill="#981CEB"></svg:circle><svg:circle cx="32.852" cy="22" r="1.986" fill="#DD2E44"></svg:circle><svg:circle cx="9.45" cy="22" r="2.412" fill="#981CEB"></svg:circle><svg:circle cx="3.061" cy="22" r="1.986" fill="#DD2E44"></svg:circle><svg:path fill="#FFAC33" d="M33 34H3a1 1 0 1 1 0-2h30a1 1 0 1 1 0 2m0-3.486H3a1 1 0 1 1 0-2h30a1 1 0 1 1 0 2"></svg:path><svg:circle cx="1.447" cy="8.042" r="1.407" fill="#FFCC4D"></svg:circle><svg:circle cx="6.75" cy="7.594" r="1.192" fill="#F4900C"></svg:circle><svg:circle cx="12.113" cy="3.523" r="1.784" fill="#FFCC4D"></svg:circle><svg:circle cx="34.553" cy="8.042" r="1.407" fill="#FFCC4D"></svg:circle><svg:circle cx="29.25" cy="7.594" r="1.192" fill="#F4900C"></svg:circle><svg:circle cx="23.887" cy="3.523" r="1.784" fill="#FFCC4D"></svg:circle><svg:circle cx="17.938" cy="5.534" r="1.784" fill="#F4900C"></svg:circle>`,
})
export class TwemojiCrownIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

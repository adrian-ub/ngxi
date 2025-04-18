import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRushIcon],svg[arcticons-rush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M34.094 29.682c0 7.08-5.749 12.818-12.84 12.818s-12.84-5.739-12.84-12.818s5.748-12.818 12.84-12.818s12.84 5.739 12.84 12.818"></svg:path><svg:path d="M33.852 32.199L39.586 6.72l-8.384 4.75L27.65 5.5L12.722 20.104"></svg:path></svg:g><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m24.538 23.71l-4.31-.724l2.821 11.43"></svg:path><svg:path d="M23.192 35.224a2.236 2.236 0 0 1-2.239 2.234h0c-1.236 0-2.238-1-2.238-2.234s1.002-2.235 2.238-2.235s2.239 1 2.239 2.235"></svg:path></svg:g>`,
})
export class ArcticonsRushIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

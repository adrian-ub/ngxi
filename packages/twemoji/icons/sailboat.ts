import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiSailboatIcon],svg[twemoji-sailboat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#A7A9AC" d="M20 26a1 1 0 1 1-2 0V1a1 1 0 0 1 2 0z"></svg:path><svg:path fill="#D1D3D4" d="M3 24h31v8H12c-6 0-9-8-9-8"></svg:path><svg:path fill="#55ACEE" d="M0 30h36v6H0z"></svg:path><svg:path fill="#FFAC33" d="M5 22s2-5 5-9s8-8 8-8s-1 11-1 16v1s-3-1-6-1s-6 1-6 1"></svg:path><svg:path fill="#F4900C" d="M20 2s6 6 9 11c2.771 4.618 4 9 4 9s-3-1-6-1s-6 1-6 1v-1c0-9-1-19-1-19"></svg:path><svg:path fill="#E6E7E8" d="M2 24a1 1 0 1 0 0 2h33v-2z"></svg:path>`,
})
export class TwemojiSailboatIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

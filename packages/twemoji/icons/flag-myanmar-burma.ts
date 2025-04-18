import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagMyanmarBurmaIcon],svg[twemoji-flag-myanmar-burma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#EA2839" d="M0 27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-4H0z"></svg:path><svg:path fill="#34B232" d="M0 13h36v10H0z"></svg:path><svg:path fill="#FECB01" d="M32 5H4a4 4 0 0 0-4 4v4h36V9a4 4 0 0 0-4-4"></svg:path><svg:path fill="#FFF" d="M18 8.76L20.353 16h7.613l-6.159 4.333l2.352 7.169L18 22.992l-6.159 4.458l2.353-7.107L8.035 16h7.613z"></svg:path>`,
})
export class TwemojiFlagMyanmarBurmaIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiLightRailIcon],svg[twemoji-light-rail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#939598" d="M0 34h36v2H0z"></svg:path><svg:path fill="#D1D3D4" d="m5 32.064l31-.065V6H17c-6 0-7 3-7 3S5 21.999 5 23.999z"></svg:path><svg:path fill="#D1D3D4" d="M14 30a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1z"></svg:path><svg:path fill="#F4900C" d="M36 35H4.527c-.531 0-1.136-.671-1.353-1.5l-.783-3C2.175 29.671 3 29 4 29h32z"></svg:path><svg:path fill="#414042" d="M36 10H22.007c-1.987 0-3.907 1.791-4.286 4l-1.033 6c-.38 2.209 1.103 4 3.312 4h16z"></svg:path><svg:path fill="#3B88C3" d="M36 12H23.095c-2.095 0-2.791 1.279-3.062 2.857l-.737 4.286C19.024 20.721 19.422 22 21 22h15z"></svg:path><svg:path fill="#414042" d="M17 6c-6 0-7 3-7 3S5.008 21.98 5 23.995c2.448-.036 4.115-.344 5-2.995c1-3 2-7 3-9s2-3 5-3c2.493 0 3.592-1.385 3.896-3z"></svg:path><svg:path fill="#55ACEE" d="M9 18c.944-2.832 3.663-7.442.6-7.949C8.759 12.273 6.793 17.539 5.723 21H6s2 0 3-3"></svg:path><svg:path fill="#DD2E44" d="M9 26a1 1 0 0 1-1 1H6a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1"></svg:path>`,
})
export class TwemojiLightRailIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

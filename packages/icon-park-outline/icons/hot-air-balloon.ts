import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineHotAirBalloonIcon],svg[icon-park-outline-hot-air-balloon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M39 18.352C39 27.855 31 36 24 36S9 27.855 9 18.352C9 10.654 14.893 4 24 4s15 6.654 15 14.352"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M25 4c3.7 3.819 7 10.12 7 16c0 5.807-3.38 12.192-7 16M23 4c-4.317 4.087-7 9.706-7 16c0 6.215 2.777 11.924 7 16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M22 16.018s5.065 1.017 9 0C34.935 15 38 13 38 13M9 20s5 2.5 9 3.5s8 .5 8 .5"></svg:path><svg:path d="m18 35l1.4 7.095S22.125 44 24 44s4.6-1.905 4.6-1.905l1.394-7.065L24 36z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m30 35l-.006.03m0 0L28.6 42.095S25.875 44 24 44s-4.6-1.905-4.6-1.905L18 35l6 1z"></svg:path></svg:g>`,
})
export class IconParkOutlineHotAirBalloonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

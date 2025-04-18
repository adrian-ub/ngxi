import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineCattleIcon],svg[icon-park-outline-cattle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="4" d="M11.465 19.923C10.682 12.481 16.517 6 24 6c7.482 0 13.317 6.481 12.534 13.923l-1.488 14.132a11.108 11.108 0 0 1-22.093 0z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14 31c3.492-3.125 11.428-7.17 20 0"></svg:path><svg:circle cx="19" cy="18" r="2" fill="currentColor"></svg:circle><svg:circle cx="21" cy="34" r="2" fill="currentColor"></svg:circle><svg:circle cx="29" cy="18" r="2" fill="currentColor"></svg:circle><svg:circle cx="27" cy="34" r="2" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M33 7.913c2.167-2 7.392-5.608 10-3s0 5-2 5.5c-2.5.625-4.2 2.3-5 3.5m-20.904-6c-2.166-2-7.392-5.608-10-3s0 5 2 5.5c2.5.625 4.2 2.3 5 3.5"></svg:path><svg:path stroke="currentColor" stroke-width="4" d="m12 25l1 9.5M36 25l-1 9.5"></svg:path></svg:g>`,
})
export class IconParkOutlineCattleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineFootballIcon],svg[icon-park-outline-football-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20"></svg:path><svg:path d="m30.093 6.5l-6.024 4.359v4.359l7.745 6.102l4.302-1.743l2.581-6.974M18.046 6.5l6.023 4.359v4.359l-7.744 6.102l-4.302-1.743l-2.582-6.974"></svg:path><svg:path d="m6 22.192l6.023-2.615l4.303 1.743l2.581 9.59l-2.581 3.487H8.58"></svg:path><svg:path d="M16.325 40.5v-6.103l2.582-3.487h10.325l2.582 3.487V40.5"></svg:path><svg:path d="M39.558 34.397h-7.744l-2.582-3.487l2.582-9.59l4.302-1.743L43 23.064"></svg:path></svg:g>`,
})
export class IconParkOutlineFootballIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

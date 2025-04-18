import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineGastrointestinalIcon],svg[icon-park-outline-gastrointestinal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M23 5q-1.719 6.69 0 9.938c1.719 3.247 5.7 5.042.574 9.373c-5.126 4.332-10.323.697-13.532.697S4.023 28.621 4.023 34q0 5.379 1.978 9"></svg:path><svg:path stroke-linejoin="round" d="M29.984 5q-2.162 7.993.985 10.14c3.148 2.145 3.389-2.336 9.172.33s4.28 11.961.953 16.746C37.768 37 30.668 41.835 24.008 41s-9.135-8.98-9.992-8.98s-2.668.025-3.022 3.397q-.353 3.372 2.01 7.583"></svg:path><svg:path d="M35.645 28.29q-.867 2.568-2.93 4.01q-2.062 1.442-5.237 1.7"></svg:path></svg:g>`,
})
export class IconParkOutlineGastrointestinalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
